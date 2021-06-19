import https from "https";
import unfetch from "isomorphic-unfetch";

const agent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === "production",
});

export default async function fetch(path, config = {}) {
  const res = await unfetch(`${process.env.BASE_URL}/api${path}`, {
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config.body),
    agent,
  });
  return res.json();
}
