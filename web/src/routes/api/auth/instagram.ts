import type { EndpointOutput } from "$lib/api/endpoint";

export async function get(): EndpointOutput {
  return {
    status: 302,
    headers: {
      location: "",
    },
  };
}
