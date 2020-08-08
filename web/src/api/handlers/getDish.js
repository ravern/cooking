import db from "~/api/db";

export default async function getDish(req, res) {
  const { id } = req.query;

  const dish = await db("dishes").where({ id }).first();

  res.json({
    data: dish ?? null,
  });
}
