import { useEffect } from "react";

import { MESSAGE_AUTH_REFRESH } from "~/constants";

export default function AuthCallbackPage() {
  useEffect(() => {
    window.opener.postMessage({
      type: MESSAGE_AUTH_REFRESH,
    });
    setTimeout(() => window.close(), 1000);
  }, []);

  return <></>;
}
