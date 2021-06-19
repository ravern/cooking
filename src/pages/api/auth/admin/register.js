import connect from "connect";

import registerAdmin from "~/api/handlers/registerAdmin";
import connectDB from "~/api/middleware/connectDB";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(connectDB);
handler.use(
  router({
    POST: registerAdmin,
  })
);

export default handler;
