import type { EndpointOutput, Request } from "$lib/api/endpoint";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type Body = {
  username: string;
  password: string;
};

export async function post(request: Request<Body>): Promise<EndpointOutput> {
  const { db } = request.locals;

  const { username, password } = request.body;

  const user = await db("users").where({ username }).first();
  if (user == null) {
    return {
      status: 400,
      body: {
        error: {
          message: "Invalid username or password",
        },
      },
    };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return {
      status: 400,
      body: {
        error: {
          message: "Invalid username or password",
        },
      },
    };
  }

  const token = jwt.sign({ id: user.id }, import.meta.env.VITE_JWT_SECRET);

  return {
    headers: {
      "set-cookie": JSON.stringify({ token }),
    },
    body: {
      user,
    },
  };
}
