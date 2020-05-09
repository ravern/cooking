import { useRouter } from "next/router";

import Layout from '../../components/layout';
import Post from "../../components/post/post";

export default function PostPage() {
  const { query: { id } } = useRouter();

  return (
    <Layout>
      <Post postID={id} />
    </Layout>
  );
}
