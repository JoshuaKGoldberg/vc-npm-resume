#!/usr/bin/env node

import chalk from "chalk";
import stripAnsi from "strip-ansi";

function logLines(lines) {
  const longestLineLength = lines.reduce(
    (biggest, line) => Math.max(biggest, stripAnsi(line).length),
    0
  );

  const numberOfLines = lines.length + 2;

  console.log(chalk.hex("#0000FF")("-".repeat(longestLineLength + 4)));
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const myProgressFraction = (i * 4) / (lines.length - 2);
    const eachHex = myProgressFraction.toString();
    const redAndGreen = eachHex.repeat(3);
    const myColorHex = `#${redAndGreen}FF`;
    // console.log({ redAndGreen });
    console.log(
      chalk.hex(myColorHex)(
        `| ${line} ${" ".repeat(longestLineLength - stripAnsi(line).length)}|`
      )
    );
  }
  console.log(chalk.hex("#ffffff")("-".repeat(longestLineLength + 4)));
}

function randomTwoDigits() {
  return Math.floor(Math.random() * 100);
}

function randomColor() {
  return (
    "#" + (Math.random() * 0xfffff * 1000000).toString(16)
    // "#" + [randomTwoDigits(), randomTwoDigits(), randomTwoDigits()].join("")
  );
}

logLines([
  "Hello, world!",
  "i might be 2 cool for u",

  "Hi, I’m Josh! I’m an full time open source developer.",
]);
