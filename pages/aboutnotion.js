import { Container, Flex, Skeleton, Stack, Grid } from '@chakra-ui/core';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';

/* export async function getServerSideProps() {
  const data = await fetch(
    'http://localhost:3000/api/notionapi/page/e053271b2bd94ab7a59a0a6a9fca0560'
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data
    }
  };
} */

const SkeletonNotion = () => {
  return (
    <Stack spacing={8} w="100%">
      <Skeleton w="100%" h="20px" />
      <Skeleton w="100%" h="20px" />
      <Skeleton w="100%" h="20px" />
      <Skeleton w="100%" h="20px" />
      <Skeleton w="100%" h="20px" />
      <Skeleton w="100%" h="20px" />
    </Stack>
  );
};

const AboutNotion = () => {
  const { data, error } = useSWR('/api/notionapi/page/e053271b2bd94ab7a59a0a6a9fca0560', fetcher);
  if (error) return <Box children="error" />;
  return (
    <>
      <Container maxW="xl">
        <Stack direction="column" w="100%" py={24}>
          {data ? <NotionRenderer blockMap={data} /> : <SkeletonNotion />}
        </Stack>
      </Container>
    </>
  );
};

export default AboutNotion;
