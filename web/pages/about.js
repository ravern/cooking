import Head from 'next/head';
import { Flex, Image, Text, Box, Stack, AspectRatioBox } from '@chakra-ui/core';

import Layout from '../components/layout';
import Banner from '../components/landing/banner';
import Posts from '../components/posts';
import BioPhoto from '../assets/bio.jpg';

export default function AboutPage() {
  return (
    <Layout>
      <Stack spacing={4}>
        <Flex direction="column" align="center" px={[4, 16, 32]}><Image src={BioPhoto} objectFit="contain" /></Flex>
        <Text>Jenny is the long term title holder of Life's reality cooking show, Chefs with Love.  She is a chef, stay home mom, loving daughter, wife and mother.</Text>
        <Text>She has been featured across the lives of her family showcasing the never-ending motherly love she has for her children in times of happiness, sadness, and togetherness.</Text>
        <Text>Being an avid cook, Jenny develops many Instagram posts sharing her amazing culinary skills with her beloved friends, making them jealous of the way she spreads her love to her children in the form of their favourite foods.</Text>
        <Text>She will always be the no.1 chef in her children's hearts.</Text>
        <Text>Jenny resides in MotherLand, where motherly love is the strongest, with her husband, and her 3 sons.</Text>
        <Text>She continues to spread her never-ending love coming from that big heart of hers by using her passion for food to innovate and recreate many of her family's favourite dishes, in which she adds her secret ingredient, love. You can always rely on her when you need anything, say the word and she will be there ready to share her not-so-secret-anymore ingredient with you.</Text>
        <Text>Her family wishes to say a few words to her: <br />
        Thank you mummy, for being the best in the world, thank you for showing us what love is all about. Happy Mother's Day</Text>
      </Stack>
    </Layout>
  );
}
