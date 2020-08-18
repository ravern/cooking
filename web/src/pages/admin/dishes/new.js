import styled from "@emotion/styled";

import ChoosePostInput from "~/components/ChoosePostInput";
import useForm from "~/hooks/useForm";
import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function NewDishPage() {
  const { values, onChange } = useForm({
    values: {
      postID: null,
    },
  });

  return (
    <AdminLayout>
      <Title>Import dish from Instagram</Title>
      <Container>
        <ChoosePostInput
          value={values.postID}
          onChange={(postID) =>
            onChange("postID")({ target: { value: postID } })
          }
        />
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
    margin-top: 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;
