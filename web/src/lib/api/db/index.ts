import knex, { Knex } from "knex";

import config from "../../../../knexfile.js";

export function connect(): Knex {
  const env =
    process.env.NODE_ENV != null ? process.env.NODE_ENV : "development";
  return knex(config[env]);
}

export default {
  connect,
};
