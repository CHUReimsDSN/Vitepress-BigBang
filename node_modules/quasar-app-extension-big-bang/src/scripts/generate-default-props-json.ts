import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import path from "path";
import ts from "typescript";

export function generateDefaultPropsJson() {
  const fileToRead = "default-props.ts";
  const fileToReadPath = path.join("src", "core", fileToRead);
  const readFormat = "utf8";

  const fileToWrite = "default-props.json";
  const fileToWriteFolder = path.join("generated", "default-props");
  const fileToWritePath = path.join(fileToWriteFolder, fileToWrite);

  mkdirSync(fileToWriteFolder, { recursive: true });
  const readContent = readFileSync(fileToReadPath, readFormat);
  const sourceFile = ts.createSourceFile(
    fileToRead,
    readContent,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  const constants = new Map<string, unknown>();
  const result: Record<string, Record<string, unknown>> = {};
  const evaluate = (node: ts.Expression): unknown => {
    if (node.kind === ts.SyntaxKind.TrueKeyword) {
      return true;
    }
    if (node.kind === ts.SyntaxKind.FalseKeyword) {
      return false;
    }
    if (ts.isStringLiteral(node)) {
      return node.text;
    }
    if (ts.isNumericLiteral(node)) {
      return Number(node.text);
    }
    if (ts.isIdentifier(node)) {
      return constants.get(node.text);
    }
    if (ts.isObjectLiteralExpression(node)) {
      const object: Record<string, unknown> = {};
      for (const property of node.properties) {
        if (!ts.isPropertyAssignment(property)) {
          continue;
        }
        const name = property.name.getText(sourceFile);
        const value = evaluate(property.initializer);
        if (value !== undefined) {
          object[name] = value;
        }
      }
      return object;
    }
    return undefined;
  };
  const visit = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer
    ) {
      const value = evaluate(node.initializer);
      if (value !== undefined) {
        constants.set(node.name.text, value);
      }
    }
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken
    ) {
      const left = node.left;
      const right = node.right;
      if (ts.isPropertyAccessExpression(left)) {
        const property = left.name.text;
        const expression = left.expression;
        if (
          ts.isPropertyAccessExpression(expression) &&
          expression.name.text === "props" &&
          ts.isIdentifier(expression.expression)
        ) {
          const component = expression.expression.text;
          const value = evaluate(right);
          if (
            value !== undefined &&
            typeof value === "object" &&
            value !== null &&
            "default" in value
          ) {
            result[component] ??= {};
            result[component][property] = value.default;
          }
        }
        if (
          property === "default" &&
          ts.isPropertyAccessExpression(expression)
        ) {
          const prop = expression;
          if (
            ts.isPropertyAccessExpression(prop.expression) &&
            prop.expression.name.text === "props" &&
            ts.isIdentifier(prop.expression.expression)
          ) {
            const component = prop.expression.expression.text;
            const propName = prop.name.text;
            const value = evaluate(right);
            if (value !== undefined) {
              result[component] ??= {};
              result[component][propName] = value;
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  const fileToWriteContent = JSON.stringify(result, null, 2);

  writeFileSync(fileToWritePath, fileToWriteContent);
  console.info(`Default props => ${fileToWrite} generated! ✅`);
}
