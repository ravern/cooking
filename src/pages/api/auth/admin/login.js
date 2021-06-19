import connect from "connect";

import loginAdmin from "~/api/handlers/loginAdmin";
import connectDB from "~/api/middleware/connectDB";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(connectDB);
handler.use(
  router({
    POST: loginAdmin,
  })
);

export default handler;
