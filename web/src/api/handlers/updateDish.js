import db from "~/api/db";

export default async function updateDish(req, res) {
  const { id } = req.query;
  const { name, description, images } = req.body;

  await db("dishes")
    .where({ id })
    .update({ name, description, images: JSON.stringify(images) });

  const dish = await db("dishes").where({ id });

  res.json({
    data: dish ?? null,
  });
}