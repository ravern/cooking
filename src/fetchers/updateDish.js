import fetch from "~/helpers/fetch";

export default async function updateDish(dish) {
  return await fetch(`/dishes/${dish.id}`, {
    method: "PATCH",
    body: dish,
  });
}
