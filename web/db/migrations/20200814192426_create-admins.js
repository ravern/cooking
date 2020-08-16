exports.up = (knex) => {
  return knex.schema.createTable("admins", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("username").unique().notNullable();
    t.text("password").notNullable();
    t.text("instagramToken");
    t.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("admins");
};
