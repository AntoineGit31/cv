import { readFileSync, lstatSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export function audit() {
  const files = JSON.parse(readFileSync(resolve(root, "public-files.json"), "utf8"));
  assert(Array.isArray(files) && files.length > 0);
  assert.equal(files.length, new Set(files).size, "Duplicate manifest entries");
  const names = new Set(files);
  const privateFiles = ["latexCV.txt", "PDFBLANC.pdf", "admis-bia-38110.pdf", "SKILL.md"];
  const checkURL = (raw) => {
    if (!raw || /^(?:https?:|mailto:|tel:|#)/i.test(raw)) return;
    assert(!/^(?:[a-z]+:|\/\/)/i.test(raw), "Unexpected resource scheme");
    const name = decodeURIComponent(raw.split(/[?#]/)[0]);
    assert(names.has(name), `Resource absent from public manifest: ${name}`);
  };
  for (const file of files) {
    assert(/^[A-Za-z0-9_.-]+\.(?:html|css|js|jpg|png|webp|svg|pdf)$/.test(file) || ["robots.txt", "sitemap.xml"].includes(file), "Unsafe manifest path");
    assert(!privateFiles.includes(file), `Private file in manifest: ${file}`);
    const info = lstatSync(resolve(root, file));
    assert(info.isFile() && !info.isSymbolicLink(), `Not a regular file: ${file}`);
    if (file.endsWith(".js")) execFileSync(process.execPath, ["--check", resolve(root, file)]);
    if (!/\.(?:js|css|html|svg)$/.test(file)) continue;
    const text = readFileSync(resolve(root, file), "utf8");
    assert(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|AKIA[0-9A-Z]{16}/.test(text), `Secret pattern in ${file}`);
    if (file.endsWith(".js")) {
      assert(!/\b(?:eval|Function)\s*\(|\.innerHTML\s*=|document\.write\s*\(/.test(text), `Unsafe JavaScript sink in ${file}`);
      for (const m of text.matchAll(/image:\s*"([^"]+)"/g)) checkURL(m[1]);
    }
    if (file.endsWith(".css")) for (const m of text.matchAll(/url\(["']?([^"')]+)["']?\)/g)) checkURL(m[1]);
    if (file.endsWith(".svg")) assert(!/<script\b|<foreignObject\b|\bon\w+\s*=/i.test(text), "Active SVG content");
  }
  const html = readFileSync(resolve(root, "index.html"), "utf8");
  assert(!/\bon\w+\s*=|javascript:|<iframe\b|<object\b|<embed\b/i.test(html), "Unexpected active HTML");
  for (const m of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) checkURL(m[1]);
  for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) for (const item of m[1].split(",")) checkURL(item.trim().split(/\s+/)[0]);
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) assert(/\bsrc=/.test(m[1]) && !m[2].trim(), "Inline script");
  for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) assert(/rel="[^"]*noopener/.test(m[0]), "External tab lacks noopener");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, "Duplicate HTML IDs");
  for (const m of html.matchAll(/aria-(?:controls|labelledby)="([^"]+)"/g)) for (const id of m[1].split(/\s+/)) assert(ids.includes(id), `Missing target: ${id}`);
  console.log(`Audit passed: ${files.length} files, links, script syntax, HTML targets and source checks.`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) audit();
