import Head from 'next/head';
import { Box, Stack } from '@chakra-ui/core';

import Layout from '../components/layout';
import Banner from '../components/landing/banner';
import Posts from '../components/posts';

export default function DessertsPage() {
  return (
    <Layout>
      <Posts
        title="Desserts"
        tags={[
          "dessert",
          "icecream",
          "pancake",
          "nori",
          "snack",
        ]}
      />
    </Layout>
  );
}
