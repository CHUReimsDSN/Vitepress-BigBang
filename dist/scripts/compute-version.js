import fs from "fs";
import path from "path";
export function computeVersion(options) {
    const fileToWritePath = ".vitepress/generated/version.ts";
    const contentByMode = {
        "package.json": getVersionPackageJson,
        ruby: getVersionRuby,
    };
    const fileContent = contentByMode[options.mode](options.fileToReadPath);
    fs.writeFileSync(fileToWritePath, fileContent);
    console.log("✅ Version computed");
}
function getVersionPackageJson(fileToReadPath) {
    const packageJsonPath = fileToReadPath ?? "../package.json";
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    return `export const version = '${packageJson.version}'`;
}
function getVersionRuby(fileToReadPath) {
    const versionFilePath = fileToReadPath ?? "../lib/submit64/version.rb";
    const fileAbsPath = path.resolve(process.cwd(), versionFilePath);
    const content = fs.readFileSync(fileAbsPath, "utf-8");
    const match = content.match(/VERSION\s*=\s*["'](\d+\.\d+\.\d+)["']/);
    return `export const version = '${match?.[1] ?? "???"}'`;
}
