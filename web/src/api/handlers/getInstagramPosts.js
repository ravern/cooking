import Cookies from "cookies";
import unfetch from "isomorphic-unfetch";

import db from "~/api/db";

export default async function getInstagramPosts(req, res) {
  const cookies = new Cookies(req, res);

  const accessToken = cookies.get("instagramToken");

  const response = await unfetch(
    `https://graph.instagram.com/17945530993005896/children?fields=id,media_url&access_token=${accessToken}`
  );
  const data = await response.json();

  console.log(data);

  const dishes = await db("dishes");

  res.json({
    data: dishes,
  });
}
