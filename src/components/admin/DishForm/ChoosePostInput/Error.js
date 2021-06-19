import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";

import Button from "~/components/Button";
import { MESSAGE_AUTH_REFRESH } from "~/constants";
import openAuthWindow from "~/helpers/openAuthWindow";

export default function Error({ error, refetch }) {
  const handleAuthMessage = useCallback((e) => {
    if (e?.data?.type === MESSAGE_AUTH_REFRESH) {
      refetch();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleAuthMessage, false);
    return () => {
      window.removeEventListener("message", handleAuthMessage);
    };
  }, []);

  const handleLogin = () => {
    openAuthWindow();
  };

  if (error?.message?.includes("Instagram")) {
    return <Button onClick={handleLogin}>Login to Instagram</Button>;
  }
  return <ErrorMessage>{error.message}</ErrorMessage>;
}

const LoginButton = styled.button``;

const ErrorMessage = styled.span`
  color: red;
`;
