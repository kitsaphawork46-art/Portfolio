import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const workspace = process.cwd();
const serverEntry = path.resolve(workspace, "dist", "server", "index.js");
const hostingSource = path.resolve(workspace, ".openai", "hosting.json");
const hostingDirectory = path.resolve(workspace, "dist", ".openai");
const hostingTarget = path.resolve(hostingDirectory, "hosting.json");

if (!existsSync(serverEntry)) {
  throw new Error(`Vinext server entrypoint was not created at ${serverEntry}`);
}

if (!existsSync(hostingSource)) {
  throw new Error(`Hosting configuration was not found at ${hostingSource}`);
}

mkdirSync(hostingDirectory, { recursive: true });
copyFileSync(hostingSource, hostingTarget);
