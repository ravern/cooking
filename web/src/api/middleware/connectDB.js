import { connect } from "~/api/db";

export default function connectDB(req, res, next) {
  if (!req.state) {
    req.state = {};
  }
  req.state.db = connect();

  next();

  res.on("finish", () => {
    req.state.db.destroy();
  });
}
