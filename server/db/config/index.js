const configEnv = require("../../configEnv");

const configMongoDB = configEnv.dbPassword
  ? `mongodb+srv://${configEnv.dbUser}:${configEnv.dbPassword}@${configEnv.dbHost}/${configEnv.dbName}`
  : `mongodb://${configEnv.dbHost}:${configEnv.dbPort}/${configEnv.dbName}`;

console.log(`configMongoDB`, configMongoDB);

module.exports = { configMongoDB };
