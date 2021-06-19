import connect from "connect";

import deleteDish from "~/api/handlers/deleteDish";
import getDish from "~/api/handlers/getDish";
import updateDish from "~/api/handlers/updateDish";
import connectDB from "~/api/middleware/connectDB";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(connectDB);
handler.use(
  router({
    GET: getDish,
    DELETE: deleteDish,
    PATCH: updateDish,
  })
);

export default handler;
