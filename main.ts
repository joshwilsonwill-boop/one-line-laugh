// One Line, One Laugh: a single funny line of at most 200 characters.
// The joke lands on a relatable everyday truth (an empty bank account)
// with a surprise twist at the end, and the program's only job is to
// write that line to entry.txt exactly as written below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My bank account and I have agreed to stop seeing each other until I get myself together.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line exactly as-is, no trailing newline added, so the
// sealed gate sees the same 88 characters the program holds.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
