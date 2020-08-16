import connect from "connect";

import loginAdmin from "~/api/handlers/loginAdmin";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(
  router({
    POST: loginAdmin,
  })
);

export default handler;
