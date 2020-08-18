import { wrap } from "async-middleware";

export default function router(routes) {
  return wrap(async (req, res) => {
    const handler = routes[req.method];
    if (!handler) {
      res.statusCode = 405;
      res.json({
        error: {
          message: "Method not allowed",
        },
      });
      return;
    }
    await wrap(handler)(req, res);
  });
}
