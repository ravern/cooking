import bcrypt from "bcryptjs";
import Cookies from "cookies";
import jwt from "jsonwebtoken";

import db from "~/api/db";

export default async function registerAdmin(req, res) {
  const cookies = new Cookies(req, res);

  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
  const passwordHash = await bcrypt.hash(password, salt);

  let admin;
  try {
    [admin] = await db("admins")
      .insert({
        username,
        password: passwordHash,
      })
      .returning("*");
  } catch (error) {
    if (error.code === "23505") {
      if (error.constraint.endsWith("username_unique")) {
        res.json({
          error: {
            message: "Username already exists",
          },
        });
        return;
      }
    }
    throw error;
  }

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);
  cookies.set("adminToken", token);

  res.json({
    data: {
      admin,
    },
  });
}
