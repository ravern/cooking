import Head from 'next/head';
import { Box, Stack } from '@chakra-ui/core';

import Layout from '../components/layout';
import Banner from '../components/landing/banner';
import Posts from '../components/posts';

export default function LandingPage() {
  return (
    <Layout>
      <Stack spacing={8}>
        <Box><Banner /></Box>
        <Box><Posts title="All posts" /></Box>
      </Stack>
    </Layout>
  );
}
