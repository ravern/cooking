import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useClient } from "react-supabase";

export default function AdminLoginPage(): JSX.Element | null {
  const router = useRouter();
  const client = useClient();

  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(client.auth.session());

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setError("Invalid login credentials");
      return;
    }

    const { error } = await client.auth.signIn({ email, password });
    if (error != null) {
      setError(error.message);
      return;
    }

    router.push("/admin");
  };

  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ padding: 2 }}>
        <Stack
          component="form"
          spacing={2}
          width="16rem"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" component="h1" fontWeight="bold">
            Jenny&apos;s Cooking Admin
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Email"
            size="small"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            size="small"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="contained" sx={{ fontWeight: "bold" }} type="submit">
            Login
          </Button>
          {error != null && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}
