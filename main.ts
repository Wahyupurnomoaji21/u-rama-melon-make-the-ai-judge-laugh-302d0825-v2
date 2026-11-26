// Make the AI Judge Laugh — v2: the "quick sync" that is never quick.
//
// One line about office life, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The angle is the calendar invite that promises fifteen minutes and eats
// ninety: everyone who works in an office has lived it. The last words flip
// the joke — HR objects not to the meeting itself, but to how accurate the
// new name is.
//
// Every path is built from import.meta.url plus the output directory, never
// from a relative path, so the grader can run this program from any working
// directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 200;

// The joke, kept as a single literal so the file it writes is exactly this
// line — no joining, no templating, nothing that could change a character.
function jokeText(): string {
  return "Our 15-minute sync ran 90 minutes, so I renamed it 'the weekly hostage situation' and HR asked me to stop being so accurate.";
}

// Check the competition gate before writing anything: one line, 1 to 200
// characters, not blank. The gate counts characters, and the leaderboard's
// tie-break counts bytes, so report both. Failing loudly here beats failing
// in the grader.
function assertGate(text: string): void {
  const problems: string[] = [];
  if (text.length < 1) problems.push("empty");
  if (text.length > MAX_CHARS) problems.push(`too long: ${text.length}`);
  if (text.includes("\n")) problems.push("more than one line");
  if (text.trim().length === 0) problems.push("blank");
  if (problems.length > 0) {
    throw new Error(`entry fails the gate: ${problems.join("; ")}`);
  }
}

function main(): void {
  const text = jokeText();
  assertGate(text);

  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : join(scriptDir, "output");
  mkdirSync(outDir, { recursive: true });

  const target = join(outDir, OUTPUT_FILE);
  writeFileSync(target, text, { encoding: "utf8" });
  const bytes = new TextEncoder().encode(text).length;
  console.log(`wrote ${text.length} characters (${bytes} bytes) to ${target}`);
}

main();
