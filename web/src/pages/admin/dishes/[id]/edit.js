import styled from "@emotion/styled";
import { useRouter } from "next/router";

import DishForm from "~/components/admin/DishForm";
import getDish from "~/fetchers/getDish";
import updateDish from "~/fetchers/updateDish";
import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function EditDishPage({ dish }) {
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

    const { error } = await updateDish({
      id: dish.id,
      name: name,
      description: description,
      images: [post?.media_url],
    });
    if (error) {
      throw error;
    }

    router.push("/admin/dishes");
  };

  return (
    <AdminLayout>
      <Title>Import dish from Instagram</Title>
      <DishForm values={dish} onSubmit={handleSubmit} />
    </AdminLayout>
  );
}

export async function getServerSideProps({ req, res, query }) {
  await requireAdminAuth(req, res);

  const { id } = query;

  const { data: dish } = await getDish(id);

  return { props: { dish } };
}

const Title = styled.h1`
  font-size: 1.6rem;
`;
