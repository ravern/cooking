import { Button, Chip, Container, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDelete, useInsert, useSelect } from "react-supabase";

import AdminHeader from "~/components/AdminHeader";

import type { Tag } from "~/api/models";

export default function AdminTags(): JSX.Element | null {
  const [, create] = useInsert<Tag>("tags");
  const [, remove] = useDelete<Tag>("tags");
  const [{ data: tags }, reexecute] = useSelect<Tag>("tags");

  const [newTag, setNewTag] = useState("");

  const handleTagDelete = (name: string) => async () => {
    await remove((query) => query.eq("name", name));
    await reexecute();
  };

  const handleNewTagClick = async () => {
    setNewTag("");
    try {
      await create({ name: newTag });
      await reexecute();
    } catch (error) {
      setNewTag(newTag);
      throw error;
    }
  };

  const handleNewTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <AdminHeader />
      <Stack spacing={2}>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          {tags?.map((tag) => (
            <Chip
              key={tag.name}
              label={tag.name}
              onDelete={handleTagDelete(tag.name)}
              sx={{ marginRight: 1, marginBottom: 1 }}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField
            variant="outlined"
            placeholder="New tag"
            size="small"
            value={newTag}
            onChange={handleNewTagChange}
          />
          <Button variant="contained" onClick={handleNewTagClick}>
            Add
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
