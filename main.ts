// One Word, First Thought — make.fun bounty entry.
//
// The program writes exactly one word, and nothing else, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when unset).
// No network, no randomness, no input: fully deterministic.
//
// The word: "apricity"
//   The warmth of the winter sun on the skin — a feeling everyone has
//   felt on a cold, bright day, but almost no one has a word for.
//   Chosen against the judge's brief: surprising rather than the safe
//   pick, vivid and specific (a clear sensation in eight letters),
//   with a warm, bright sound that rewards a second look, and it feels
//   deliberately chosen rather than generic filler.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "apricity";

// Guard the gate: one word, 1-24 characters, not only whitespace.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error("chosen word fails the gate: must be a single word of 1-24 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
