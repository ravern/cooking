import unfetch from "isomorphic-unfetch";

export async function obtainAccessToken(code, redirectURI) {
  const body = new URLSearchParams();
  body.append("client_id", process.env.INSTAGRAM_APP_ID);
  body.append("client_secret", process.env.INSTAGRAM_APP_SECRET);
  body.append("grant_type", "authorization_code");
  body.append("redirect_uri", redirectURI);
  body.append("code", code);

  const res = await unfetch(`https://api.instagram.com/oauth/access_token`, {
    method: "POST",
    body,
  });
  const data = await res.json();

  return data?.access_token;
}

export async function obtainLongLivedAccessToken(accessToken) {
  const res = await unfetch(
    `https://graph.instagram.com/access_token?client_secret=${process.env.INSTAGRAM_APP_SECRET}&grant_type=ig_exchange_token&access_token=${accessToken}`
  );
  const data = await res.json();

  return data?.access_token;
}

export async function getMedia(accessToken) {
  const res = await unfetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,timestamp&access_token=${accessToken}`
  );
  const data = await res.json();

  return data?.data;
}
