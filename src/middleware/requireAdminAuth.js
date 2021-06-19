import Cookies from "cookies";

export default async function requireAdminAuth(req, res) {
  const cookies = new Cookies(req, res);

  const token = cookies.get("adminToken");

  if (!token) {
    res.writeHead(302, {
      Location: "/admin/login",
    });
    res.end();
  }
}
