import connect from "connect";

import getInstagramPosts from "~/api/handlers/getInstagramPosts";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(
  router({
    GET: getInstagramPosts,
  })
);

export default handler;
