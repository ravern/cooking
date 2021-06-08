import cookies from "cookie";
import type { EndpointOutput, Request } from "$lib/api/endpoint";
import bcrypt from "bcryptjs";
import jwt from "$lib/api/jwt";
import type { User } from "$lib/api/db/models";

type Body = {
  username: string;
  password: string;
};

export async function post(request: Request<Body>): Promise<EndpointOutput> {
  const { db } = request.locals;

  const { username, password } = request.body;

  const user: User = await db("users").where({ username }).first();
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

  const token = await jwt.sign({ id: user.id });

  delete user.password;
  delete user.credentials;

  return {
    headers: {
      "set-cookie": cookies.serialize("token", token),
    },
    body: {
      user,
    },
  };
}
