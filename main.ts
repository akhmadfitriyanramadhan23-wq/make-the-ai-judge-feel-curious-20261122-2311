// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt: an envelope with no sender,
// a gate left open, a light in a room never used — and a key beside a cup
// of tea, still warm. Curiosity, held gently: every question the text asks
// is left open, and nothing in it is explained.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "No stamp, no sender — only your name, in a hand you almost know. " +
  "Inside, one line: the garden gate is open, and the light is on in the " +
  "room you never use. You look out the window. It is all true. And beside " +
  "a cup of tea, still warm, a key waits for a door you have never seen.";

const points = [...TEXT].length;
if (points < 1 || points > 280) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
