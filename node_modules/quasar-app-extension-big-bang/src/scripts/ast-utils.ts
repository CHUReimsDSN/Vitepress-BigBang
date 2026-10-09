import ts from "typescript";

export const getJsDoc = (node: ts.Node, sourceFile: ts.SourceFile) => {
  const fullText = sourceFile.getFullText();
  const ranges = ts.getLeadingCommentRanges(fullText, node.getFullStart());
  if (!ranges) {
    return null;
  }
  const comment = ranges
    .map((range) => fullText.slice(range.pos, range.end))
    .find((value) => value.startsWith("/**"));
  if (!comment) {
    return null;
  }
  const lines = comment
    .replace(/^\/\*\*/, "")
    .replace(/\*\/$/, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim());
  const description: string[] = [];
  const tags: Record<string, string[]> = {};
  let currentTag: string | null = null;
  for (const line of lines) {
    if (!line) {
      if (!currentTag) {
        description.push("");
      }
      continue;
    }
    const tagMatch = line.match(/^@(\w+)(?:\s+(.*))?$/);
    if (tagMatch) {
      currentTag = tagMatch[1]!;
      tags[currentTag] ??= [];
      if (tagMatch[2]) {
        tags[currentTag]!.push(tagMatch[2]);
      }
      continue;
    }
    if (currentTag) {
      tags[currentTag]!.push(line);
    } else {
      description.push(line);
    }
  }
  return {
    desc: description.join(" ").trim(),
    tags,
  };
};

export const parseDefaultJsDoc = (value: string): unknown => {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (!Number.isNaN(Number(trimmed)) && trimmed !== "") {
    return Number(trimmed);
  }
  try {
    return JSON.parse(trimmed);
  } catch {
    return trimmed;
  }
};

export const getType = (
  node: ts.TypeNode,
  sourceFile: ts.SourceFile,
): string | string[] => {
  if (node.kind === ts.SyntaxKind.StringKeyword) {
    return "String";
  }
  if (node.kind === ts.SyntaxKind.NumberKeyword) {
    return "Number";
  }
  if (node.kind === ts.SyntaxKind.BooleanKeyword) {
    return "Boolean";
  }
  if (node.kind === ts.SyntaxKind.AnyKeyword) {
    return "Any";
  }
  if (node.kind === ts.SyntaxKind.UnknownKeyword) {
    return "unknown";
  }
  if (node.kind === ts.SyntaxKind.NullKeyword) {
    return "null";
  }
  if (node.kind === ts.SyntaxKind.UndefinedKeyword) {
    return "undefined";
  }
  if (ts.isTypeReferenceNode(node)) {
    return getTypeReference(node, sourceFile);
  }
  if (ts.isArrayTypeNode(node)) {
    return "Array";
  }
  if (ts.isTypeLiteralNode(node)) {
    return "Object";
  }
  if (ts.isFunctionTypeNode(node)) {
    return "Function";
  }
  if (ts.isUnionTypeNode(node)) {
    const types = node.types
      .filter((type) => type.kind !== ts.SyntaxKind.UndefinedKeyword)
      .map((type) => getType(type, sourceFile))
      .flat();

    return types.length === 1 ? types[0]! : types;
  }
  if (ts.isLiteralTypeNode(node)) {
    return getLiteralType(node);
  }
  return "Any";
};

export const getLiteralType = (node: ts.LiteralTypeNode): string => {
  if (ts.isStringLiteral(node.literal)) {
    return "String";
  }
  if (ts.isNumericLiteral(node.literal)) {
    return "Number";
  }
  if (
    node.literal.kind === ts.SyntaxKind.TrueKeyword ||
    node.literal.kind === ts.SyntaxKind.FalseKeyword
  ) {
    return "Boolean";
  }
  return "unknown";
};

export const getTypeReference = (
  node: ts.TypeReferenceNode,
  sourceFile: ts.SourceFile,
): string | string[] => {
  const name = node.typeName.getText(sourceFile);
  switch (name) {
    case "String":
      return "String";

    case "Number":
      return "Number";

    case "Boolean":
      return "Boolean";

    case "Array":
      return "Array";

    case "Object":
      return "Object";

    case "Function":
      return "Function";

    case "Record":
    case "Readonly":
    case "Partial":
      return "Object";

    case "Date":
      return "Object";
  }

  let resolved: ts.TypeNode | undefined;
  const visit = (current: ts.Node) => {
    if (ts.isTypeAliasDeclaration(current) && current.name.text === name) {
      resolved = current.type;
      return;
    }
    ts.forEachChild(current, visit);
  };
  visit(sourceFile);
  if (resolved) {
    return getType(resolved, sourceFile);
  }
  return name;
};
