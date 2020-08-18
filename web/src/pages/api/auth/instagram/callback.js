import connect from "connect";

import callbackInstagram from "~/api/handlers/callbackInstagram";
import requireAdminAuth from "~/api/middleware/requireAdminAuth";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(requireAdminAuth);
handler.use(
  router({
    GET: callbackInstagram,
  })
);

export default handler;
