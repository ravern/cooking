import fetch from "~/helpers/fetch";

export default async function deleteDish(dishID) {
  return await fetch(`/dishes/${dishID}`, {
    method: "DELETE",
  });
}
