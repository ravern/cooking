import connect from "connect";

import createDish from "~/api/handlers/createDish";
import getDishes from "~/api/handlers/getDishes";
import router from "~/api/middleware/router";

const handler = connect();

handler.use(
  router({
    GET: getDishes,
    POST: createDish,
  })
);

export default handler;
