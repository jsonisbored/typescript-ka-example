import * as esbuild from "esbuild";
import fs from "fs";


const outFile = "./app/main.js";
await esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: outFile,
});

const bundled = `
const canvas = document.querySelector("#mycanvas");
const instance = new Processing(canvas, instance => {
    with (instance) {
        size(400, 400);
        frameRate(60);
        ${fs.readFileSync(outFile, "utf-8")};
    }
});`;
console.log(bundled);
fs.writeFileSync(outFile, bundled);
