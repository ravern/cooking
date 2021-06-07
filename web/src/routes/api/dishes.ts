import type { EndpointOutput } from "@sveltejs/kit";

export async function get(): Promise<EndpointOutput> {
  return { body: { babe: "hey" } };
}
