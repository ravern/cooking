import db from "~/api/db";

export default async function createDish(req, res) {
  const { name, description, images } = req.body;

  const [id] = await db("dishes")
    .insert({
      name,
      description,
      images: JSON.stringify(images),
    })
    .returning("id");

  const dish = await db("dishes").where({ id }).first();

  res.json({
    data: dish,
  });
}
