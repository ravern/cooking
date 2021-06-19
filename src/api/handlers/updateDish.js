export default async function updateDish(req, res) {
  const { db } = req.state;
  const { id } = req.query;
  const { name, pictures, body } = req.body;

  await db("dishes").where({ id }).update({ name, pictures, body });

  const dish = await db("dishes").where({ id });

  res.json({
    data: dish ?? null,
  });
}
