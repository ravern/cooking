import fetch from "~/helpers/fetch";

export default async function loginAdmin(username, password) {
  return await fetch("/auth/admin/login", {
    method: "POST",
    body: {
      username,
      password,
    },
  });
}
