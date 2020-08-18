import db from "~/api/db";

export default async function deleteDish(req, res) {
  const { id } = req.query;

  const dish = await db("dishes").where({ id }).first();

  await db("dishes").where({ id }).del();

  res.json({
    data: dish ?? null,
  });
}
