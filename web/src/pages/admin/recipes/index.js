import connect from "next-connect";

import createRecipe from "~/api/handlers/createRecipe";
import getRecipes from "~/api/handlers/getRecipes";
import auth from "~/api/middleware/auth";
import cookies from "~/api/middleware/cookies";
import db from "~/api/middleware/db";

export default connect()
  .use(db())
  .use(cookies())
  .get(getRecipes)
  .post(
    connect()
      .use(auth({ protectByError: true }))
      .use(createRecipe)
  );
