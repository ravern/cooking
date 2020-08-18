import { getMedia } from "~/api/clients/instagram";

export default async function getInstagramPosts(req, res) {
  const { admin } = req.state;

  if (!admin.instagramToken) {
    res.json({
      error: {
        message: "You need to login to Instagram.",
      },
    });
    res.status(401);
    return;
  }

  const { data: posts, error } = await getMedia(admin.instagramToken);

  if (error) {
    res.json({
      error: {
        message: "You need to login to Instagram.",
      },
    });
    res.status(401);
    return;
  }

  res.json({ data: posts });
}
