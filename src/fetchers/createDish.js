import fetch from "~/helpers/fetch";

export default async function createDish(dish) {
  return await fetch("/dishes", {
    method: "POST",
    body: dish,
  });
}
