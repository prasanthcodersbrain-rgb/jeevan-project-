import app from "./app.js";
import env from "./config/env.js";
import { sequelize } from "./models/index.js";
import { runSeeders } from "./services/seederService.js";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await runSeeders();

    app.listen(env.port, env.host, () => {
      console.log(`Server running on http://${env.host}:${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
