#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = Math.floor(Math.random() * 10 + 1);
rl.question(`Загадано число в диапазоне от 0 до 10 \n`, (userInput) => {
  if (userInput.trim() == num) {
    rl.close();
  } else if (userInput.trim() > num) {
    rl.setPrompt("Больше \n");
    rl.prompt();
  } else if (userInput.trim() < num) {
    rl.setPrompt("Меньше \n");
    rl.prompt();
  }
  rl.on("line", (userInput) => {
    if (userInput.trim() == num) {
      rl.close();
    } else if (userInput.trim() > num) {
      rl.setPrompt("Больше \n");
      rl.prompt();
    } else {
      rl.setPrompt("Меньше \n");
      rl.prompt();
    }
  });
});
rl.on("close", () => {
  console.log(`Отгадано число ${num}`);
});
