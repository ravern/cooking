import type {
  Request as SvelteKitRequest,
  Response as SvelteKitResponse,
  EndpointOutput as SvelteKitEndpointOutput,
} from "@sveltejs/kit";
import type { Knex } from "knex";
import type { User } from "./db/models";

export type RequestLocals = {
  db: Knex;
  user: User | null;
};

export type Request<Body = unknown> = SvelteKitRequest<RequestLocals, Body>;

export type Response = SvelteKitResponse;

export type Resolver = (request: Request) => Response | Promise<Response>;

export type HandleArgs = { request: Request; resolve: Resolver };

export type EndpointOutput = SvelteKitEndpointOutput;
