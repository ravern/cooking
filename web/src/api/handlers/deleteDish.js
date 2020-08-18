export default async function deleteDish(req, res) {
  const { db } = req.state;
  const { id } = req.query;

  const dish = await db("dishes").where({ id }).first();

  await db("dishes").where({ id }).del();

  res.json({
    data: dish ?? null,
  });
}
