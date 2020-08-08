import connect from "connect";

import getDish from "~/api/handlers/getDish";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(
  router({
    GET: getDish,
  })
);

export default handler;
