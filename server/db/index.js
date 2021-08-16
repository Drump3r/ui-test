const db = require("./models");
const { configMongoDB } = require("./config");

function handleFatalError(err) {
  console.error(`[FATAL ERROR] ${err.message}`);
  console.error(err.stack);
}

function setup() {
  return db(configMongoDB).catch(handleFatalError);
}

module.exports = setup;
