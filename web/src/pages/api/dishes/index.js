import { wrap } from "async-middleware";
import connect from "connect";

import getDishes from "~/api/handlers/getDishes";
import methods from "~/api/middleware/methods";

const handler = connect();

handler.use(methods(["GET"]));
handler.use(wrap(getDishes));

export default handler;
