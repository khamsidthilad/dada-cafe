import { cpSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");

cpSync("index.html", "dist/index.html");
for (const dir of ["css", "js", "assets"]) {
  cpSync(dir, `dist/${dir}`, { recursive: true });
}

console.log("Built static site → dist/");
