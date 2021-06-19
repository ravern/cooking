export default async function createDish(req, res) {
  const { db, admin } = req.state;
  const { name, pictures, body } = req.body;

  const [dish] = await db("dishes")
    .insert({
      admin_id: admin.id,
      name,
      pictures,
      body,
    })
    .returning("*");

  res.json({
    data: dish,
  });
}
