export default async function createDish(req, res) {
  const { db } = req.state;
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
