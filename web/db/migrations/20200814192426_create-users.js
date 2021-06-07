export function up(knex) {
  return knex.schema.createTable("users", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("username").unique().notNullable();
    t.text("password").notNullable();
    t.json("credentials");
    t.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("users");
}
