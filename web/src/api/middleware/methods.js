export default function methods(methods) {
  return (req, res, next) => {
    if (!methods.includes(req.method)) {
      res.statusCode = 405;
      res.json({
        error: {
          message: "Method not allowed",
        },
      });
      return;
    }
    next();
  };
}
