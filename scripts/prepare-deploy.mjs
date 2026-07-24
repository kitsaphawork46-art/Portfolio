import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";

const workspace = process.cwd();
const exportDirectory = path.resolve(workspace, "out");
const deployDirectory = path.resolve(workspace, "dist");

if (!existsSync(exportDirectory)) {
  throw new Error(`Static export was not created at ${exportDirectory}`);
}

if (path.dirname(deployDirectory) !== workspace || path.basename(deployDirectory) !== "dist") {
  throw new Error("Refusing to replace an unexpected deployment directory.");
}

rmSync(deployDirectory, { recursive: true, force: true });
cpSync(exportDirectory, deployDirectory, { recursive: true });
