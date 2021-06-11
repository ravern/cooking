export default function openAuthWindow(): Window {
  const url = `${import.meta.env.VITE_BASE_URL}/api/auth/instagram`;

  const width = 640;
  const height = 480;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  return window.open(
    url,
    "Instagram Login",
    `width=${width},height=${height},left=${left},top=${top}`,
  );
}
