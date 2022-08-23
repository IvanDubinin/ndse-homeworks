const fs = require("fs");

const readGames = JSON.parse(fs.readFileSync("./log.txt"));

let calcWins = (readGames.wins * 100) / readGames.games;

console.log(`
Общее количество партий: ${readGames.games} 
Количество выигранных партий: ${readGames.wins} 
Количество проигранных партий: ${readGames.lost} 
Процентное соотношение выигранных партий: ${calcWins}%
`);
