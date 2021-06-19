import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import ReactRichTextEditor from "react-rte";

export default function RichTextEditor({ initialValue, onChange }) {
  const [value, setValue] = useState(ReactRichTextEditor.createValueFromString(initialValue, 'html'));

  const handleChange = (value) => {
    setValue(value)
    onChange(value.toString("html"))
  }

  return <Container><ReactRichTextEditor value={value} onChange={handleChange} /></Container>;
}

const Container = styled.div`
  & .DraftEditor-root {
    font-family: "Playfair Display", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif !important;
  }
`;