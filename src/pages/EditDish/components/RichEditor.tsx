import { Stack } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";

export type RichEditorProps = {
  initialValue: any;
  onChange: (newValue: any) => void;
};

export default function RichEditor({
  initialValue,
  onChange,
}: RichEditorProps): JSX.Element | null {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  useEffect(() => {
    if (editor == null) {
      return;
    }
    editor.commands.setContent(initialValue);
    editor.on("update", ({ editor }) => {
      onChange(editor.getJSON());
    });
  }, [editor, initialValue, onChange]);

  return (
    <Stack
      width="100%"
      sx={{
        px: 2,
        border: (theme) =>
          editor?.isFocused
            ? `2px solid ${theme.palette.primary.main}`
            : `1px solid rgba(0, 0, 0, 0.42)`,
        transition: "border 200ms",
        "> div > .ProseMirror": {
          minHeight: "16rem",
          outline: "none",
        },
      }}
    >
      <EditorContent editor={editor} />
    </Stack>
  );
}
