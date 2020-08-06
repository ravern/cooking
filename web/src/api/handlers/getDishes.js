import db from "~/api/db";

export default async function getDishes(req, res) {
  const dishes = await db("dishes");

  res.json({
    data: dishes,
  });
}
