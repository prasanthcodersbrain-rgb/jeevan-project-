import seeders, { seederContext } from "../seeders/index.js";

export const runSeeders = async () => {
  for (const seeder of seeders) {
    await seeder.run(seederContext);
  }
};
