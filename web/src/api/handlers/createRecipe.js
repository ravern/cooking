export default async function createRecipe(req, res) {
  const { db } = req.state;
  const { dish_id, ingredients, steps } = req.body;

  const [recipe] = await db("recipes")
    .insert({
      dish_id,
      ingredients: JSON.stringify(ingredients),
      steps: JSON.stringify(steps),
    })
    .returning("*");

  res.json({
    data: recipe,
  });
}
