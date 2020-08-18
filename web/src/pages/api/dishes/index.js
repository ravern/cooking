import connect from "connect";

import createDish from "~/api/handlers/createDish";
import getDishes from "~/api/handlers/getDishes";
import connectDB from "~/api/middleware/connectDB";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(connectDB);
handler.use(
  router({
    GET: getDishes,
    POST: createDish,
  })
);

export default handler;
