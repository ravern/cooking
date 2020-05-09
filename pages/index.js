import Head from 'next/head';

import Layout from '../components/layout';
import Banner from '../components/landing/banner';

export default function LandingPage() {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}
