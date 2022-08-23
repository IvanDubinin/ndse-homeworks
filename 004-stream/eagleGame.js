const fs = require("fs");
const readline = require("readline");
const min = 1;
const max = 2;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = Math.floor(Math.random() * (max + 1 - min) + 1);
rl.question(`Угадай число от 1 до 2 \n`, (userInput) => {
  if (userInput.trim() == num) {
    rl.setPrompt("Число отгадано \n");
    rl.prompt();
    fs.readFile("log.txt", "utf8", (error, data) => {
      data = JSON.parse(data);
      data.games += 1;
      data.wins += 1;
      fs.writeFile("./log.txt", JSON.stringify(data), (error) => {
        if (error) throw error;
      });
      if (error) {
        throw error;
      }
    });
    rl.close();
  } else if (userInput.trim() != num) {
    rl.setPrompt("Число не отгадано \n");
    rl.prompt();
    fs.readFile("log.txt", "utf8", (error, data) => {
      data = JSON.parse(data);
      data.games += 1;
      data.lost += 1;
      fs.writeFile("./log.txt", JSON.stringify(data), (error) => {
        if (error) throw error;
      });
      if (error) {
        throw error;
      }
    });
    rl.close();
  }
});
