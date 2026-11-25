import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fixed a bug where sleep consumed 8 hours a night. Sleep now runs in the background; dreams are cached and waking up tired is resolved.";

mkdirSync("/output", { recursive: true });

// Gate: 1-160 chars, single line, not only whitespace.
if (entry.length < 1 || entry.length > 160) {
  throw new Error(`entry length ${entry.length} outside 1-160`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote ${entry.length} chars`);
console.log(entry);
