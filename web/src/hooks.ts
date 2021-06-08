import type { Response, HandleArgs, Request } from "$lib/api/endpoint";
import db from "$lib/api/db";
import jwt from "$lib/api/jwt";
import type { User } from "$lib/api/db/models";
import cookies from "cookie";

async function getUser({
  locals: { db },
  headers: { cookie },
}: Request): Promise<User | null> {
  if (cookie == null) {
    return null;
  }

  const { token } = cookies.parse(cookie);
  if (token == null) {
    return null;
  }

  const { id } = await jwt.verify(token);

  return db("users").where({ id }).first();
}

async function handleRequest({
  request,
  resolve,
}: HandleArgs): Promise<Response> {
  request.locals.db = db.connect();
  request.locals.user = await getUser(request);

  const response = await resolve(request);

  await request.locals.db.destroy();

  return response;
}

export async function handle(args: HandleArgs): Promise<Response> {
  if (import.meta.env.DEV) {
    return handleRequest(args);
  } else {
    try {
      return handleRequest(args);
    } catch {
      return {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          error: {
            message: "Internal server error",
          },
        }),
      };
    }
  }
}
