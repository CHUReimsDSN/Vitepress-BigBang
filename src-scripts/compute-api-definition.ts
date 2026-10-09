import fs from "fs";
import { Project, Node } from "ts-morph";

export function computeApiDefinition() {
  const project = new Project();
  const fileModel = project.addSourceFileAtPath("../src/models.ts");
  const apiDefinitionPath = "documentation/999_definition.md";
  let apiDefinitionContent = `---
title: Définition API
icon: api
---

# Définition API
`;

  fileModel.forEachChild((node) => {
    if (
      Node.isTypeAliasDeclaration(node) ||
      Node.isInterfaceDeclaration(node) ||
      Node.isEnumDeclaration(node)
    ) {
      const hasTag = node.getJsDocs()?.some((doc) =>
        doc.getTags().some((tag) => tag.getTagName() === "exportToDoc"),
      );

      if (hasTag) {
        apiDefinitionContent = apiDefinitionContent.concat(`

## ${node.getName()}
\`\`\`typescript
${node.getText()}
\`\`\`
`);
      }
    }
  });
  fs.writeFileSync(apiDefinitionPath, apiDefinitionContent);
  console.log("✅ Definition API computed");
}
