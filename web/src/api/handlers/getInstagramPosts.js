import { getMedia } from "~/api/clients/instagram";

export default async function getInstagramPosts(req, res) {
  const { admin } = req.state;

  if (!admin.instagramToken) {
    res.json({
      error: {
        message: "You need to login to Instagram.",
      },
    });
    res.state(401);
    return;
  }

  const posts = await getMedia(admin.instagramToken);

  res.json({ data: posts });
}
