import connect from "connect";

import getInstagramPosts from "~/api/handlers/getInstagramPosts";
import connectDB from "~/api/middleware/connectDB";
import requireAdminAuth from "~/api/middleware/requireAdminAuth";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(connectDB);
handler.use(requireAdminAuth);
handler.use(
  router({
    GET: getInstagramPosts,
  })
);

export default handler;
