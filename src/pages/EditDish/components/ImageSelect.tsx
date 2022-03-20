import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Box, Button, Input, Stack } from "@mui/material";
import React, { useRef } from "react";

export type Image = {
  file?: File;
  src: string;
};

export type ImageSelectProps = {
  value: Image[];
  onChange: (images: Image[]) => void;
};

export default function ImageSelect({
  value,
  onChange,
}: ImageSelectProps): JSX.Element | null {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newValue = [...value];
    const files = event.target.files ?? [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      newValue.push({
        file: file,
        src: URL.createObjectURL(file),
      });
    }
    onChange(newValue);

    if (inputRef.current != null) {
      inputRef.current.value = "";
    }
  };

  const handleAddImageClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    inputRef.current?.click();
  };

  const handleDeleteImageClick =
    (src: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      if (confirm("Are you sure you want to delete this image?")) {
        const newValue = value.filter((image) => image.src !== src);
        onChange(newValue);
      }
    };

  return (
    <>
      <Input
        type="file"
        inputRef={inputRef}
        inputProps={{ multiple: true, accept: "image/png,image/jpeg" }}
        sx={{ display: "none", position: "absolute" }}
        onChange={handleInputChange}
      />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          height: "20rem",
          overflowX: "scroll",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Button
          variant="outlined"
          onClick={handleAddImageClick}
          sx={{
            minWidth: "20rem",
            height: "100%",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddIcon />
          Add images
        </Button>
        {value.map((image) => {
          return (
            <Box key={image.src} sx={{ position: "relative", height: "100%" }}>
              <Box component="img" src={image.src} sx={{ height: "100%" }} />
              <Button
                variant="contained"
                color="error"
                sx={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                }}
                onClick={handleDeleteImageClick(image.src)}
              >
                <DeleteIcon />
              </Button>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}
