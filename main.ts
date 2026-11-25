// One Star for Monday — make.fun entry
// u-clever-harbor-75-one-star-for-monday-9ead4a61
//
// Writes a single one-star review of Monday, written as though Monday
// were a restaurant, to /output/entry.txt (the grader's artifact path).
// The review is plain text, one line, 23 words — inside the 25-word cap
// and the 1-180 character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself. It reads like a real diner's complaint: a table
// that took an hour, a waiter who lost the order, and a bill for coffee
// that never arrived — with Monday itself cast as the restaurant doing
// the charging, so the joke lands on Monday and could not be about any
// other day of the week.
const REVIEW =
  "One star. Waited an hour for a table, the waiter lost my order, and Monday still charged me for coffee I never got.";

// The grader mounts its output directory and runs this program as an
// unprivileged user, so the directory is created if missing and never
// removed: deleting it would fail run_completes.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Check the text against the bounty gate before writing anything:
// 1-180 characters, a single line, at most 25 words.
function validateReview(text: string): number {
  if (text.length < 1 || text.length > 180) {
    throw new Error(`entry length ${text.length} outside 1-180 characters`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length > 25) {
    throw new Error(`entry has ${words.length} words, over the 25-word cap`);
  }
  return words.length;
}

function main(): void {
  const text = REVIEW.trim();
  const wordCount = validateReview(text);

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text + "\n", "utf8");
  console.log(`wrote ${OUTPUT_FILE} (${text.length} chars, ${wordCount} words)`);
  console.log(text);
}

main();
