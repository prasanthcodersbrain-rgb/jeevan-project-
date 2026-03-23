import { sequelize } from "./models/index.js";
import { runSeeders } from "./services/seederService.js";

const seed = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await runSeeders();
    console.log("Seeders completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seed();
