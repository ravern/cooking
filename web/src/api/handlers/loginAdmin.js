import bcrypt from "bcryptjs";
import Cookies from "cookies";
import jwt from "jsonwebtoken";

export default async function loginAdmin(req, res) {
  const { db } = req.state;

  const cookies = new Cookies(req, res);

  const { username, password } = req.body;

  const admin = await db("admins").where({ username }).first();

  if (!admin) {
    res.json({ error: { message: "Invalid username or password" } });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    res.json({ error: { message: "Invalid username or password" } });
    return;
  }

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);
  cookies.set("adminToken", token);

  res.json({
    data: {
      admin,
    },
  });
}
