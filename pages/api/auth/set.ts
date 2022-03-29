import { client } from "~/api";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  client.auth.api.setAuthCookie(req, res);
}
