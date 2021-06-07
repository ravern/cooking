export function up(knex) {
  return knex.schema.createTable("dishes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("user_id").references("users.id").unique().notNullable();
    t.text("name").notNullable();
    t.specificType("pictures", "TEXT ARRAY").notNullable();
    t.text("body").notNullable();
    t.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("dishes");
}
