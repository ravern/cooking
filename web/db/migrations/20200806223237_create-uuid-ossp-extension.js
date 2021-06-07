export function up(knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
}

export function down(knex) {
  return knex.raw('DROP EXTENSION "uuid-ossp"');
}
