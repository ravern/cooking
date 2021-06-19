export default async function getRecipes(req, res) {
  const { db } = req.state;

  const recipes = await db("recipes");

  res.json({
    data: recipes,
  });
}
