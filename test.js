const { getWeather } = require("./weatherLib");

async function main() {
  const weather = await getWeather("Lagos");
  console.log(weather);
}

main();
