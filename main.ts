import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Long Roast: one line roasting my own AI agent, at most 200 characters.
// Deterministic: no network, no clock, no randomness, no files outside the repo.
const ENTRY =
  "My agent read 134KB of rules and ran a full verification suite just to write one joke — then asked me if it was funny.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
