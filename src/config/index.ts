import oracledb from "oracledb";

import dotenv from "dotenv";
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config: { db_options: oracledb.ConnectionAttributes; level: string } = {
  /**
   * Your favorite port
   */
  db_options: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionString:
      process.env.DB_HOST +
      ":" +
      process.env.DB_PORT +
      "/" +
      process.env.DB_SERVICE_NAME,
  },

  level: process.env.LOG_LEVEL || "silly",

  /**
   * API configs
   */
};

export default config;
