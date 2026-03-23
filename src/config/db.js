import { Sequelize } from "sequelize";
import env from "./env.js";

const sequelize =
  env.dbDialect === "sqlite"
    ? new Sequelize({
        dialect: "sqlite",
        storage: env.sqliteStorage,
        logging: false
      })
    : new Sequelize(env.dbName, env.dbUser, env.dbPassword, {
        host: env.dbHost,
        port: env.dbPort,
        dialect: "mysql",
        logging: false
      });

export default sequelize;
