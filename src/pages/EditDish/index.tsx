import {
  Alert,
  Autocomplete,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useFilter, useSelect, useUpdate } from "react-supabase";

import AdminHeader from "~/components/AdminHeader";
import useForm from "~/hooks/useForm";

import RichEditor from "./components/RichEditor";

import type { Dish } from "~/api/models";

export type EditDishFormValues = {
  title: string;
  subtitle: string;
  body: any;
  tags: string[];
};

const INITIAL_VALUES = {
  title: "",
  subtitle: "",
  body: {},
  tags: [],
};

const TAGS = [{ name: "Vegan" }, { name: "Fresh" }, { name: "Tasty" }];

export default function EditDishPage(): JSX.Element | null {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const filter = useFilter((query) => query.eq("id", id), [id]);
  const [{ data: dishes }, reexecute] = useSelect<Dish>("dishes", {
    filter,
    pause: id == null,
  });
  const dish = dishes?.[0];
  const [, update] = useUpdate<Dish>("dishes");

  const handleSubmit = async ({
    title,
    subtitle,
    body,
    tags,
  }: EditDishFormValues) => {
    await update({ title, subtitle, body, tags }, filter);
    await reexecute();
  };

  const { values, error, setValue, onChange, onSubmit } =
    useForm<EditDishFormValues>({
      initialValues: dish ?? INITIAL_VALUES,
      onSubmit: handleSubmit,
    });

  const handleTagsChange = (_event: unknown, tags: { name: string }[]) => {
    setValue(
      "tags",
      tags.map((tag) => tag.name),
    );
  };

  const handleEditorChange = useCallback(
    (value: any) => {
      setValue("body", value);
    },
    [setValue],
  );

  console.log(values.tags);

  if (dish == null) {
    return <CircularProgress />;
  }
  return (
    <Container maxWidth="lg">
      <AdminHeader />
      <Stack
        component="form"
        spacing={2}
        alignItems="flex-start"
        onSubmit={onSubmit}
        p={2}
      >
        {error != null && <Alert>{error.message}</Alert>}
        <TextField
          variant="standard"
          fullWidth
          InputProps={{
            sx: { fontSize: "3rem", fontWeight: "bold" },
          }}
          value={values.title}
          onChange={onChange("title")}
        />
        <TextField
          variant="standard"
          fullWidth
          multiline
          value={values.subtitle}
          onChange={onChange("subtitle")}
        />
        <Autocomplete
          multiple
          limitTags={3}
          options={TAGS}
          getOptionLabel={(tag) => tag.name}
          isOptionEqualToValue={(leftTag, rightTag) =>
            leftTag.name === rightTag.name
          }
          defaultValue={[]}
          value={values.tags.map((tag) => ({ name: tag }))}
          onChange={handleTagsChange}
          renderInput={(params) => (
            <TextField {...params} variant="standard" placeholder="Tags" />
          )}
          fullWidth
        />
        <RichEditor initialValue={dish.body} onChange={handleEditorChange} />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ fontWeight: "bold" }} type="submit">
            Save
          </Button>
          <Button variant="contained" color="error" sx={{ fontWeight: "bold" }}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
