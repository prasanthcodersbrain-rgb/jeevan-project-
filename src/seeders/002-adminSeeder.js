import env from "../config/env.js";

const seedAdmin = async ({ User }) => {
  if (!env.jwtSecret || !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    return;
  }

  const existingAdmin = await User.findOne({
    where: {
      email: process.env.ADMIN_EMAIL
    }
  });

  if (existingAdmin) {
    return;
  }

  await User.create({
    fullName: process.env.ADMIN_NAME || "Platform Admin",
    email: process.env.ADMIN_EMAIL,
    phone: process.env.ADMIN_PHONE || "9999999999",
    passwordHash: process.env.ADMIN_PASSWORD,
    role: "admin"
  });
};

export default {
  name: "002-admin",
  run: seedAdmin
};
