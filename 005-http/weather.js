const axios = require("axios");
const config = require("./config.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `Введите название города для получения прогноза погоды  \n`,
  (userInput) => {
    if (userInput.trim()) {
      let params = {
        access_key: `${config.key}`,
        query: userInput,
      };
      axios
        .get(config.url, { params })
        .then((response) => {
          const apiResponse = response.data;
          //   console.log(apiResponse);
          console.log(`
            Current weather description is ${apiResponse.current.weather_descriptions[0]}
            Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃
            Current humidity is ${apiResponse.current.humidity}%`);
        })
        .catch((error) => {
          console.log(error);
        });

      rl.close();
    }
  }
);
rl.on("close", () => {
  console.log("Weather forecast:");
});
