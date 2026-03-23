import dotenv from "dotenv";

dotenv.config();

const env = {
  port: Number(process.env.PORT || 5000),
  host: process.env.HOST || "127.0.0.1",
  dbDialect: process.env.DB_DIALECT || "mysql",
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: Number(process.env.DB_PORT || 3306),
  dbName: process.env.DB_NAME || "health_booking",
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "",
  sqliteStorage: process.env.SQLITE_STORAGE || "./dev.sqlite",
  jwtSecret: process.env.JWT_SECRET || "unsafe-development-secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  appCommissionRate: Number(process.env.APP_COMMISSION_RATE || 15)
};

export default env;
