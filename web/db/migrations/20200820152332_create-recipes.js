exports.up = (knex) => {
  return knex.schema.createTable("recipes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("dish_id").references("dishes.id").unique().notNullable();
    t.json("ingredients");
    t.json("steps");
    t.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("recipes");
};
