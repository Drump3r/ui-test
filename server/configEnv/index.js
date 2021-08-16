require("dotenv").config();
const configEnv = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  apiUrl: process.env.API_URL || "http://localhost:3000/",
};
module.exports = configEnv;
