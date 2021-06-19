import fetch from "~/helpers/fetch";

export default async function getDishes() {
  return await fetch("/dishes");
}
