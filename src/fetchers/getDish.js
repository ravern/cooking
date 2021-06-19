import fetch from "~/helpers/fetch";

export default async function getDish(dishID) {
  return await fetch(`/dishes/${dishID}`);
}
