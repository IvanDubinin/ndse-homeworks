#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;

let now = new Date();
const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const current = new Date().toISOString().slice(0, 16).replace("T", " ");

const calcArg = (arg, a, b, c) => {
  if (arg === "add") {
    return b ? a + b : a + c;
  } else if (arg === "sub") {
    return b ? a - b : a - c;
  } else if (arg === "current") {
    return a;
  }
};

if (argv.year || argv.y) {
  if (argv.$0 === "add" || argv.$0 === "sub") {
    console.log(
      new Date(now.setFullYear(calcArg(argv.$0, year, argv.year, argv.y)))
        .toISOString()
        .slice(0, 16)
        .replace("T", " ")
    );
  } else if (argv.$0 === "current") {
    console.log(calcArg(argv.$0, year, argv.year, argv.y));
  }
} else if (argv.month || argv.m) {
  if (argv.$0 === "add" || argv.$0 === "sub") {
    console.log(
      new Date(now.setMonth(calcArg(argv.$0, month, argv.month, argv.m)))
        .toISOString()
        .slice(0, 16)
        .replace("T", " ")
    );
  } else if (argv.$0 === "current") {
    console.log(calcArg(argv.$0, month, argv.month, argv.m));
  }
} else if (argv.date || argv.d) {
  if (argv.$0 === "add" || argv.$0 === "sub") {
    console.log(
      new Date(now.setDate(calcArg(argv.$0, date, argv.date, argv.d)))
        .toISOString()
        .slice(0, 16)
        .replace("T", " ")
    );
  } else if (argv.$0 === "current") {
    console.log(calcArg(argv.$0, date, argv.date, argv.d));
  }
} else {
  console.log(current);
}
