export default async function getDishes(req, res) {
  const { db } = req.state;

  const dishes = await db("dishes");

  res.json({
    data: dishes,
  });
}
