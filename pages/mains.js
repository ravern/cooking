import Head from 'next/head';
import { Box, Stack } from '@chakra-ui/core';

import Layout from '../components/layout';
import Banner from '../components/landing/banner';
import Posts from '../components/posts';

export default function MainsPage() {
  return (
    <Layout>
      <Posts
        title="Mains"
        tags={[
          "fullmeal",
          "chicken",
          "fish",
          "rösti",
          "potato",
        ]}
      />
    </Layout>
  );
}
