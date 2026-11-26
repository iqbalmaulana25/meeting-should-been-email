// The Meeting That Should Have Been an Email
// Writes one line, a joke about the meeting, to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR overrides /output outside the grader)
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const line =
  "Forty minutes in, we all agreed this should have been an email, then booked a follow-up to discuss the email.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
