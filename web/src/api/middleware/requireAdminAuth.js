import { wrap } from "async-middleware";
import Cookies from "cookies";
import jwt from "jsonwebtoken";

async function requireAdminAuth(req, res, next) {
  const { db } = req.state;

  const cookies = new Cookies(req, res);

  const token = cookies.get("adminToken");
  if (!token) {
    res.status(401);
    res.json({
      error: {
        message: "You need to be authenticated.",
      },
    });
    return;
  }

  let id;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    id = payload.id;
  } catch {
    res.status(401);
    res.json({
      error: {
        message: "Invalid authentication token provided.",
      },
    });
    return;
  }

  const admin = await db("admins").where({ id }).first();
  if (!admin) {
    res.status(401);
    res.json({
      error: {
        message: "Invalid authentication token provided.",
      },
    });
    return;
  }

  if (!req.state) {
    req.state = {};
  }
  req.state.admin = admin;

  next();
}

export default wrap(requireAdminAuth);