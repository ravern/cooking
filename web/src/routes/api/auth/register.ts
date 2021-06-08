import "dotenv/config";

import type { EndpointOutput, Request } from "$lib/api/endpoint";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { User } from "$lib/api/db/models";

type Body = {
  username: string;
  password: string;
};

export async function post(request: Request<Body>): Promise<EndpointOutput> {
  const { db } = request.locals;

  const { username, password } = request.body;

  const saltRounds = import.meta.env.VITE_BCRYPT_SALT_ROUNDS;
  const salt = await bcrypt.genSalt(parseInt(saltRounds));
  const passwordHash = await bcrypt.hash(password, salt);

  let user: User;
  try {
    [user] = await db("users")
      .insert({
        username,
        password: passwordHash,
      })
      .returning("*");
  } catch (error) {
    if (error.code === "23505") {
      if (error.constraint.endsWith("username_unique")) {
        return {
          body: {
            error: {
              message: "Username already exists",
            },
          },
        };
      }
      throw error;
    }
  }

  console.log(process.env.JWT_SECRET);

  const token = jwt.sign({ id: user.id }, import.meta.env.VITE_JWT_SECRET);

  return {
    headers: {
      "set-cookie": JSON.stringify({ token }),
    },
    body: {
      data: user,
    },
  };
}
