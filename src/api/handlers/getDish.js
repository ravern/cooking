export default async function getDish(req, res) {
  const { db } = req.state;
  const { id } = req.query;

  const dish = await db("dishes").where({ id }).first();

  res.json({
    data: dish ?? null,
  });
}
