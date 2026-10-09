import { mkdirSync, writeFileSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import ts from "typescript";
import { parse } from "@vue/compiler-sfc";
import { getJsDoc, getType, parseDefaultJsDoc } from "./ast-utils";

export type TComponentApi = {
  type: "component";
  props: Record<string, TPropDefinition>;
  events: Record<string, unknown>;
  slots: Record<string, unknown>;
  methods: Record<string, TMethodDefinition>;
};

export type TPropDefinition = {
  type: string | string[];
  desc?: string;
  default?: unknown;
  examples?: unknown[];
  category?: string;
  params?: Record<string, TPropDefinition>;
  returns?: TPropDefinition | null;
};

export type TMethodDefinition = {
  desc?: string;
  params?: Record<
    string,
    {
      type: string;
      desc?: string;
      examples?: string[];
    }
  >;
  returns?: {
    type: string;
    desc?: string;
    examples?: string[];
  }
};

export function generateComponentsJson() {
  const filesToReadPath = path.join("src", "components");
  const fileFormat = "utf8";

  const filesToWritePath = path.join("generated", "components");

  mkdirSync(filesToWritePath, { recursive: true });
  const readFiles = readdirSync(filesToReadPath).filter((f) =>
    f.endsWith(".vue"),
  );

  // props
  const buildProp = (
    node: ts.PropertySignature,
    sourceFile: ts.SourceFile,
  ): TPropDefinition => {
    const result: TPropDefinition = {
      type: node.type ? getType(node.type, sourceFile) : "Unknown",
    };
    const jsDoc = getJsDoc(node, sourceFile);
    if (jsDoc) {
      if (jsDoc.desc) {
        result.desc = jsDoc.desc;
      }
      if (jsDoc.tags.category?.[0]) {
        result.category = jsDoc.tags.category[0];
      }
      if (jsDoc.tags.example) {
        result.examples = jsDoc.tags.example;
      }
      if (jsDoc.tags.default?.[0]) {
        result.default = parseDefaultJsDoc(jsDoc.tags.default[0]);
      }
    }
    return result;
  };

  const findDefinePropsType = (
    sourceFile: ts.SourceFile,
  ): ts.TypeNode | undefined => {
    let result: ts.TypeNode | undefined;
    const visit = (node: ts.Node) => {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "defineProps" &&
        node.typeArguments?.length
      ) {
        result = node.typeArguments[0];
        return;
      }
      ts.forEachChild(node, visit);
    };
    visit(sourceFile);
    return result;
  };

  const extractProps = (
    typeNode: ts.TypeNode,
    sourceFile: ts.SourceFile,
  ): Record<string, TPropDefinition> => {
    const props: Record<string, TPropDefinition> = {};
    if (ts.isTypeLiteralNode(typeNode)) {
      for (const member of typeNode.members) {
        if (!ts.isPropertySignature(member)) continue;
        if (!member.name) continue;
        const name = member.name.getText(sourceFile);
        props[name] = buildProp(member, sourceFile);
      }
    }

    if (ts.isTypeReferenceNode(typeNode)) {
      const name = typeNode.typeName.getText(sourceFile);
      const visit = (node: ts.Node) => {
        if (ts.isInterfaceDeclaration(node) && node.name.text === name) {
          for (const member of node.members) {
            if (!ts.isPropertySignature(member)) continue;
            if (!member.name) continue;
            const propName = member.name.getText(sourceFile);
            props[propName] = buildProp(member, sourceFile);
          }
        }
        ts.forEachChild(node, visit);
      };
      visit(sourceFile);
    }
    return props;
  };

  // slots
  const extractSlots = (template: string): Record<string, unknown> => {
    const slots: Record<string, unknown> = {};
    // TODO
    return slots;
  };

  // methods
  const findDefineExpose = (
    sourceFile: ts.SourceFile,
  ): ts.ObjectLiteralExpression | undefined => {
    let result: ts.ObjectLiteralExpression | undefined;
    const visit = (node: ts.Node) => {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "defineExpose" &&
        node.arguments.length > 0 &&
        ts.isObjectLiteralExpression(node.arguments[0]!)
      ) {
        result = node.arguments[0];
        return;
      }
      ts.forEachChild(node, visit);
    };
    visit(sourceFile);
    return result;
  };
  const buildMethod = (
    fn: ts.FunctionDeclaration,
    sourceFile: ts.SourceFile,
  ): Record<string, unknown> => {
    const method: Record<string, unknown> = {};
    const jsDoc = getJsDoc(fn, sourceFile);
    if (jsDoc?.desc) {
      method.desc = jsDoc.desc;
    }
    if (jsDoc?.tags.category?.[0]) {
      method.category = jsDoc.tags.category[0];
    }
    if (jsDoc?.tags.example) {
      method.examples = jsDoc.tags.example;
    }
    if (fn.parameters.length > 0) {
      const params: Record<string, unknown> = {};
      for (const param of fn.parameters) {
        if (!ts.isIdentifier(param.name)) {
          continue;
        }
        const name = param.name.text;
        const paramInfo: Record<string, unknown> = {
          type: param.type ? getType(param.type, sourceFile) : "Unknown",
        };
        const paramDoc = jsDoc?.tags.param?.find((value) => {
          const match = value.match(/^(\w+)\s*(.*)$/);
          return match?.[1] === name;
        });
        if (paramDoc) {
          const match = paramDoc.match(/^(\w+)\s*(.*)$/);
          if (match?.[2]) {
            paramInfo.desc = match[2].trim();
          }
        }
        params[name] = paramInfo;
      }
      method.params = params;
    }

    if (fn.type) {
      const returns: Record<string, unknown> = {
        type: fn.type.getText(sourceFile),
      };
      const returnsDoc = jsDoc?.tags.returns?.[0];
      if (returnsDoc) {
        returns.desc = returnsDoc;
      }
      if (jsDoc?.tags["return-example"]) {
        returns.examples = jsDoc.tags["return-example"];
      }
      method.returns = returns;
    }
    return method;
  };
  const findFunction = (
    sourceFile: ts.SourceFile,
    name: string,
  ): ts.FunctionDeclaration | undefined => {
    let result: ts.FunctionDeclaration | undefined;
    function visit(node: ts.Node) {
      if (ts.isFunctionDeclaration(node) && node.name?.text === name) {
        result = node;
        return;
      }
      ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return result;
  };
  const extractMethods = (
    expose: ts.ObjectLiteralExpression | undefined,
    sourceFile: ts.SourceFile,
  ): Record<string, TMethodDefinition> => {
    const methods: Record<string, TMethodDefinition> = {};
    if (!expose) {
      return methods;
    }
    for (const property of expose.properties) {
      if (
        !ts.isShorthandPropertyAssignment(property) &&
        !ts.isPropertyAssignment(property)
      ) {
        continue;
      }
      const name = property.name.getText(sourceFile);
      const fn = findFunction(sourceFile, name);
      if (!fn) {
        methods[name] = {};
        continue;
      }
      methods[name] = buildMethod(fn, sourceFile);
    }
    return methods;
  };

  // final
  const generateJson = (filePath: string) => {
    const source = readFileSync(filePath, fileFormat);
    const { descriptor } = parse(source);
    if (!descriptor.scriptSetup) {
      console.warn(`Skipping ${path.basename(filePath)}: no <script setup>`);
      return;
    }
    const script = descriptor.scriptSetup.content;
    const sourceFile = ts.createSourceFile(
      filePath,
      script,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );

    // slots
    const propsType = findDefinePropsType(sourceFile);
    const props = propsType ? extractProps(propsType, sourceFile) : {};
    const slots = extractSlots(descriptor.template?.content ?? "");

    // methods
    const expose = findDefineExpose(sourceFile);
    const methods = extractMethods(expose, sourceFile);
    const result: TComponentApi = {
      type: "component",
      props,
      events: {},
      slots,
      methods,
    };
    const componentName = path.basename(filePath, ".vue");
    const outputFilename = `${componentName}.json`;
    const outputPath = path.join(filesToWritePath, outputFilename);

    writeFileSync(
      outputPath,
      JSON.stringify(result, null, 2) + "\n",
      fileFormat,
    );
    console.info(`Component => ${outputFilename} generated! ✅`);
  };

  for (const file of readFiles) {
    generateJson(path.join(filesToReadPath, file));
  }
}
