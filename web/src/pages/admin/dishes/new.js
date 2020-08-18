import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";

import ChoosePostInput from "~/components/ChoosePostInput";
import createDish from "~/fetchers/createDish";
import useForm from "~/hooks/useForm";
import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function NewDishPage() {
  const router = useRouter();

  const handleSubmit = async ({ name, description, post }) => {
    if (!name) {
      throw new Error("Name is required.");
    }
    if (!description) {
      throw new Error("Description is required.");
    }
    if (!post) {
      throw new Error("Please select an Instagram post.");
    }

    const { error } = await createDish({
      name: name,
      description: description,
      images: [post?.media_url],
    });
    if (error) {
      throw error;
    }

    router.push("/admin/dishes");
  };

  const { values, onChange, onSubmit, error } = useForm({
    values: {
      post: null,
      name: "",
      description: "",
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    onChange("description")(values.post?.caption);
  }, [onChange, values.post]);

  return (
    <AdminLayout>
      <Title>Import dish from Instagram</Title>
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
        <SubmitButton onClick={onSubmit}>Submit new dish</SubmitButton>
      </Container>
    </AdminLayout>
  );
}

export async function getServerSideProps({ req, res }) {
  await requireAdminAuth(req, res);

  return { props: {} };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;

  & > * + * {
    margin-top: 2.4rem;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
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
