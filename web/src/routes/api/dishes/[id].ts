import "dotenv/config";

import type { EndpointOutput, Request } from "$lib/api/endpoint";

export async function get({
  params: { id },
  locals: { db },
}: Request): Promise<EndpointOutput> {
  const dish = await db("dishes").where({ id }).first();
  if (dish == null) {
    return {
      status: 404,
      body: {
        error: {
          message: "Dish not found.",
        },
      },
    };
  }

  return {
    body: {
      data: dish,
    },
  };
}
