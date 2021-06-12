import fetch from "~/helpers/fetch";

import DishGrid from "../components/DishGrid";
import BaseLayout from "../layouts/Base";

export default function IndexPage({ dishes, error }) {
  return (
    <BaseLayout>
      <DishGrid dishes={dishes} />
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  const { data: dishes, error } = await fetch("/dishes");

  return {
    props: {
      dishes: dishes ?? null,
      error: error ?? null,
    },
  };
}
