import fetch from "~/helpers/fetch";

export default function IndexPage({ data, error }) {
  return JSON.stringify(data);
}

export async function getServerSideProps() {
  const { data, error } = await fetch("/dishes");

  return {
    props: {
      data: data ?? null,
      error: error ?? null,
    },
  };
}
