import unfetch from "isomorphic-unfetch";

export default async function fetch(path, config = {}) {
  const res = await unfetch(`${process.env.API_URL}${path}`, {
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config.body),
  });
  return res.json();
}
