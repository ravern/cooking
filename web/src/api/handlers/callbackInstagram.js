import {
  obtainAccessToken,
  obtainLongLivedAccessToken,
} from "~/api/clients/instagram";
import db from "~/api/db";

export default async function callbackInstagram(req, res) {
  const { code } = req.query;
  const { admin } = req.state;

  const redirectURI = `${process.env.BASE_URL}/api/auth/instagram/callback`;

  const accessToken = await obtainAccessToken(code, redirectURI);
  const longLivedAccessToken = await obtainLongLivedAccessToken(accessToken);

  await db("admins")
    .where({ id: admin.id })
    .update({ instagramToken: longLivedAccessToken });

  res.writeHead(302, {
    Location: "/auth/callback",
  });
  res.end();
}