import styled from "@emotion/styled";
import dynamic from "next/dynamic";

import Button from "~/components/Button";
import useForm from "~/hooks/useForm";

import ChoosePostInput from "./ChoosePostInput";

const RichTextEditor = dynamic(
  () => import("~/components/admin/RichTextEditor"),
  { ssr: false }
);

export default function DishForm({
  values: initialValues,
  onSubmit: handleSubmit,
}) {
  const { values, onChange, onSubmit, error } = useForm({
    values: initialValues,
    onSubmit: handleSubmit,
  });

  // useEffect(() => {
  //   onChange("body")(values.post?.caption);
  // }, [onChange, values.post]);

  return (
    <Container>
      <Divider />
      <ChoosePostInput value={values.post} onChange={onChange("post")} />
      <Divider />
      <DetailsContainer>
        <DetailsTitle>Step 2: Fill in post details</DetailsTitle>
        <InputContainer>
          <NameInput
            value={values.name}
            onChange={onChange("name")}
            placeholder="Name"
          />
        </InputContainer>
        <InputContainer>
          <RichTextEditor
            initialValue={initialValues.body}
            onChange={onChange("body")}
          />
        </InputContainer>
      </DetailsContainer>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <Divider />
      <Button onClick={onSubmit}>Submit</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;

  & > * + * {
    margin-top: 2.4rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 1.6rem;
  }
`;

const DetailsTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
`;

const Label = styled.label``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

const NameInput = styled.input`
  font-family: inherit;
  font-size: 2rem;
  font-weight: 900;
  border: none;
`;

const BodyTextarea = styled.textarea`
  height: 12rem;
  resize: none;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const Divider = styled.hr`
  border: 1px solid black;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
`;
