import connect from "connect";

import registerAdmin from "~/api/handlers/registerAdmin";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(
  router({
    POST: registerAdmin,
  })
);

export default handler;
