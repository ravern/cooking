import jwt from "jsonwebtoken";

export async function auth(options = {}) {
  return async (req, res, next) => {
    const { protectByRedirect, protectByError } = options;

    const { cookies, db } = req.state;

    const token = cookies.get("token");
    if (!token) {
      if (protectByRedirect || protectByError) {
        respondWithError(res, options);
      } else {
        next();
      }
      return;
    }

    let id;
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      id = payload.id;
    } catch {
      respondWithError(res, options);
      return;
    }

    if (db) {
      const user = await db("users").where({ id }).first();
      if (!user) {
        respondWithError(res, options);
        return;
      }

      req.state = { ...req.state, user };
    }

    next();
  };
}

function respondWithError(res, options) {
  const { protectByRedirect, protectByError, redirectPath } = options;

  if (protectByRedirect) {
    res.writeHead(302, {
      Location: redirectPath ?? "/",
    });
    res.end();
  } else if (protectByError) {
    res.status(401);
    res.json({
      error: {
        message: "You are not authenticated",
      },
    });
  }
}
