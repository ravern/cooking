import type { Response, HandleArgs } from "$lib/api/endpoint";
import db from "$lib/api/db";

export async function handle({
  request,
  resolve,
}: HandleArgs): Promise<Response> {
  request.locals.db = await db.connect();

  console.log("THE DB", request.locals.db);

  const response = await resolve(request);

  await request.locals.db.destroy();

  return {
    ...response,
    headers: {
      ...response.headers,
      "x-custom-header": "potato",
    },
  };
}
