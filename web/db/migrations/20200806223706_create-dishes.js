exports.up = (knex) => {
  return knex.schema.createTable("dishes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("name").notNullable();
    t.text("description").notNullable();
    t.json("images").notNullable();
    t.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("dishes");
};
