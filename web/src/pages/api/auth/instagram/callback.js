import connect from "connect";
import unfetch from "isomorphic-unfetch";

import router from "~/api/middleware/router";

const handler = connect();

async function callback(req, res) {
  console.log(req.query);

  const redirectURI = `${process.env.BASE_URL}/api/auth/instagram/callback`;

  const body = new URLSearchParams();
  body.append("client_id", process.env.INSTAGRAM_APP_ID);
  body.append("client_secret", process.env.INSTAGRAM_APP_SECRET);
  body.append("grant_type", "authorization_code");
  body.append("redirect_uri", redirectURI);
  body.append("code", req.query.code);

  const response = await unfetch(
    `https://api.instagram.com/oauth/access_token`,
    {
      method: "POST",
      body,
    }
  );
  const data = await response.json();

  console.log(data);

  res.json({});
}

handler.use(
  router({
    GET: callback,
  })
);

export default handler;
