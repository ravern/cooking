import fetch from "~/helpers/fetch";

export default async function getInstagramPosts() {
  return await fetch("/instagram/posts");
}
