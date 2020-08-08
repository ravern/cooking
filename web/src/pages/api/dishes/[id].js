import { wrap } from "async-middleware";
import connect from "connect";

import getDish from "~/api/handlers/getDish";
import methods from "~/api/middleware/methods";

const handler = connect();

handler.use(methods(["GET"]));
handler.use(wrap(getDish));

export default handler;
