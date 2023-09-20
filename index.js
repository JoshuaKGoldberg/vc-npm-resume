#!/usr/bin/env node

import chalk from "chalk";
import stripAnsi from "strip-ansi";

function logLines(lines) {
  const longestLineLength = lines.reduce(
    (biggest, line) => Math.max(biggest, stripAnsi(line).length),
    0
  );

  console.log("-".repeat(longestLineLength + 4));
  for (const line of lines) {
    console.log(
      `| ${line} ${" ".repeat(longestLineLength - stripAnsi(line).length)}|`
    );
  }
  console.log("-".repeat(longestLineLength + 4));
}

logLines([
  chalk.blue("Hello, world!"),
  "vanilla",
  chalk.red("Hi, I’m Josh! I’m an full time open source developer."),
]);

// for (const letter of chalk.green("test")) {
//   console.log(`My letter is:'${letter}'`);
// }
