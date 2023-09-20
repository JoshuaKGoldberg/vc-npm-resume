#!/usr/bin/env node

function logLines(lines) {
  const longestLineLength = lines.reduce(
    (biggest, line) => Math.max(biggest, line.length),
    0
  );

  console.log("-".repeat(longestLineLength + 4));
  for (const line of lines) {
    console.log(`| ${line} ${" ".repeat(longestLineLength - line.length)}|`);
  }
  console.log("-".repeat(longestLineLength + 4));
}

logLines([
  "Hello, world!",
  "Hi, I’m Josh! I’m an full time open source developer.",
]);
