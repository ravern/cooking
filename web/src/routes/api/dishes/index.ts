import "dotenv/config";

import type { EndpointOutput, Request } from "$lib/api/endpoint";

type Body = {
  name: string;
  pictures: string[];
  body: string;
};

export async function post({
  locals: { db, user },
  body: { name, pictures, body },
}: Request<Body>): Promise<EndpointOutput> {
  if (user == null) {
    return {
      status: 401,
      body: {
        error: {
          message: "You need to be logged in!",
        },
      },
    };
  }

  const [dish] = await db("dishes")
    .insert({
      name,
      pictures,
      body,
      user_id: user.id,
    })
    .returning("*");

  return {
    body: {
      data: dish,
    },
  };
}

export async function get({
  locals: { db },
}: Request): Promise<EndpointOutput> {
  const dishes = await db("dishes");

  return {
    body: {
      data: dishes,
    },
  };
}
