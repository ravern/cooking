import {
  obtainAccessToken,
  obtainLongLivedAccessToken,
} from "~/api/clients/instagram";

export default async function callbackInstagram(req, res) {
  const { db } = req.state;
  const { code } = req.query;
  const { admin } = req.state;

  const redirectURI = `${process.env.BASE_URL}/api/auth/instagram/callback`;

  const accessToken = await obtainAccessToken(code, redirectURI);
  const longLivedAccessToken = await obtainLongLivedAccessToken(accessToken);

  await db("admins")
    .where({ id: admin.id })
    .update({ credentials: { instagramToken: longLivedAccessToken } });

  res.writeHead(302, {
    Location: "/auth/callback",
  });
  res.end();
}
