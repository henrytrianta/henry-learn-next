import { Container, Stack } from '@chakra-ui/react';
import { get } from 'axios';

import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';

export async function getStaticProps() {
  // const data = await axios(
  //   'http://localhost:3000/api/notionapi/page/e053271b2bd94ab7a59a0a6a9fca0560'
  // ).then((res) => {
  //   return res.data;
  // });
  const data = await get(
    'https://notion-api.splitbee.io/v1/page/e053271b2bd94ab7a59a0a6a9fca0560',
  ).then((res) => res.data);

  return {
    props: {
      blockMap: data,
    },
  };
}

const WhereWork = ({ blockMap }) => (
  <>
    <Container maxW="xl">
      <Stack direction="column" w="100%" py={24}>
        <NotionRenderer blockMap={blockMap} />
      </Stack>
    </Container>
  </>
);

export default WhereWork;
