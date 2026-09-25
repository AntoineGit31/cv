import { readFileSync, lstatSync, mkdirSync, rmSync, copyFileSync } from "node:fs";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { audit } from "./audit.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "dist");
const files = JSON.parse(readFileSync(resolve(root, "public-files.json"), "utf8"));
audit();
// Check the exact destination before recursive deletion, including symlink escapes.
if (relative(root, output) !== "dist") throw new Error("Unexpected output directory");
try {
  if (lstatSync(output).isSymbolicLink()) throw new Error("dist cannot be a symlink");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
rmSync(output, { recursive: true, force: true });
mkdirSync(output);
for (const file of files) copyFileSync(resolve(root, file), resolve(output, file));
console.log(`Built ${files.length} reviewed public files in dist/`);
