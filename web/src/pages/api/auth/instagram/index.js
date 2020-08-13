import connect from "connect";

import router from "~/api/middleware/router";

const handler = connect();

function redirect(req, res) {
  const appID = process.env.INSTAGRAM_APP_ID;
  const redirectURI = `${process.env.BASE_URL}/auth/instagram/callback`;
  const url = `https://api.instagram.com/oauth/authorize?client_id=${appID}&redirect_uri=${redirectURI}&scope=user_profile,user_media&response_type=code`;

  res.writeHead(302, {
    Location: url,
  });
  res.end();
}

handler.use(
  router({
    GET: redirect,
  })
);

export default handler;
