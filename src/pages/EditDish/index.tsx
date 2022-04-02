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
import React, { useCallback, useMemo } from "react";
import { useClient, useFilter, useSelect, useUpdate } from "react-supabase";

import AdminHeader from "~/components/AdminHeader";
import uploadFile from "~/helpers/uploadFile";
import useForm from "~/hooks/useForm";

import ImageSelect from "./components/ImageSelect";
import RichEditor from "./components/RichEditor";

import type { Image } from "./components/ImageSelect";
import type { Dish, Tag } from "~/api/models";

export type EditDishFormValues = {
  title: string;
  subtitle: string;
  body: any;
  images: Image[];
  tags: string[];
};

const INITIAL_VALUES = {
  title: "",
  subtitle: "",
  body: {},
  images: [],
  tags: [],
};

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
  const [{ data: tags }] = useSelect<Tag>("tags");

  const supabase = useClient();

  const handleSubmit = async ({
    title,
    subtitle,
    body,
    tags,
    ...values
  }: EditDishFormValues) => {
    const images = await Promise.all(
      values.images.map(async (image) => {
        if (image.file == null) {
          return image.src;
        } else {
          return await uploadFile(supabase, image.file);
        }
      }),
    );
    await update({ title, subtitle, images, body, tags }, filter);
    await reexecute();
  };

  const initialValues = useMemo(() => {
    if (dish == null) {
      return INITIAL_VALUES;
    }
    return {
      ...dish,
      images: dish.images.map((src) => ({ src })),
    };
  }, [dish]);

  const { values, error, setValue, onChange, onSubmit } =
    useForm<EditDishFormValues>({
      initialValues,
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

  const handleImagesChange = (value: Image[]) => {
    setValue("images", value);
  };

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
          placeholder="Title"
          value={values.title}
          onChange={onChange("title")}
        />
        <TextField
          variant="standard"
          fullWidth
          multiline
          placeholder="Subtitle"
          value={values.subtitle}
          onChange={onChange("subtitle")}
        />
        <Autocomplete
          multiple
          limitTags={3}
          options={tags ?? []}
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
        <ImageSelect value={values.images} onChange={handleImagesChange} />
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
