const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
const outputEncoding = 'utf8';
const entry = 'I’ll remember your coffee order forever, unless you mention it in a different thread.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, outputEncoding);
