import * as fs from "node:fs";
import * as path from "node:path";

// Writes one line: a hilarious autocorrect fail.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = path.join(outDir, "entry.txt");

const line = "I texted my boss \"I'll be there in a sec\" — autocorrect sent \"I'll be there in a sex\" and now HR wants a word.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, line, "utf8");
fs.chmodSync(outFile, 0o644);
