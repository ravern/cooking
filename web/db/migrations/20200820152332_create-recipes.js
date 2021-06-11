exports.up = (knex) => {
  return knex.schema.createTable("recipes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("dish_id").references("dishes.id").unique().notNullable();
    t.uuid("admin_id").references("admins.id").unique().notNullable();
    t.text("body").notNullable();
    t.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("recipes");
};
