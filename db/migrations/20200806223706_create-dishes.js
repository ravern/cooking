exports.up = (knex) => {
  return knex.schema.createTable("dishes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("admin_id").references("admins.id").notNullable();
    t.text("name").notNullable();
    t.specificType("pictures", "TEXT ARRAY").notNullable();
    t.text("body").notNullable();
    t.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("dishes");
};
