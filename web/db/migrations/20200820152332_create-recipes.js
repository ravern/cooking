export function up(knex) {
  return knex.schema.createTable("recipes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("dish_id").references("dishes.id").unique().notNullable();
    t.uuid("user_id").references("users.id").unique().notNullable();
    t.text("body").notNullable();
    t.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("recipes");
}
