import ts from "typescript";

export function generateDefinitions() {
  const config = {
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      outDir: "./generated/definitions",
      target: ts.ScriptTarget.ES2025,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
    },
    include: ["./src/core/**/*.ts"],
  };

  const result = ts.parseJsonConfigFileContent(config, ts.sys, process.cwd());
  const program = ts.createProgram(result.fileNames, result.options);
  program.emit();
  console.info(`Definitions => generated! ✅`);
}
