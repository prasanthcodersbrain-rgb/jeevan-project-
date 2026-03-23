import jwt from "jsonwebtoken";
import env from "../config/env.js";

const generateToken = (user) =>
  jwt.sign({ id: user.id, role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn
  });

export default generateToken;
