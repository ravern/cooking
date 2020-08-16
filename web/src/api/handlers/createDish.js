import db from "~/api/db";

export default async function createDish(req, res) {
  const { name, description, images } = req.body;

  const [dish] = await db("dishes")
    .insert({
      name,
      description,
      images: JSON.stringify(images),
    })
    .returning("*");

  res.json({
    data: dish,
  });
}
