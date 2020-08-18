import styled from "@emotion/styled";
import { useEffect } from "react";

import useForm from "~/hooks/useForm";

import ChoosePostInput from "./ChoosePostInput";

export default function DishForm({
  values: initialValues,
  onSubmit: handleSubmit,
}) {
  const { values, onChange, onSubmit, error } = useForm({
    values: initialValues,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    onChange("description")(values.post?.caption);
  }, [onChange, values.post]);

  return (
    <Container>
      <ChoosePostInput value={values.post} onChange={onChange("post")} />
      <DetailsContainer>
        <DetailsTitle>Step 2: Fill in post details</DetailsTitle>
        <InputContainer>
          <Label>Name</Label>
          <NameInput value={values.name} onChange={onChange("name")} />
        </InputContainer>
        <InputContainer>
          <Label>Description</Label>
          <DescriptionTextarea
            value={values.description}
            onChange={onChange("description")}
          />
        </InputContainer>
      </DetailsContainer>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
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

const DetailsTitle = styled.h2``;

const Label = styled.label``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

const NameInput = styled.input``;

const DescriptionTextarea = styled.textarea`
  height: 12rem;
  resize: none;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const SubmitButton = styled.button``;
