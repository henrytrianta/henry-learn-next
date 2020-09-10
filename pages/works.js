import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';
// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';

import Masonry from '@/components/Masonry';

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 3,
    ...(ref ? { ref } : null)
  });

  return {
    props: {
      projects: projects ? projects.results : [],
      preview
    }
  };
}

const Works = ({ projects }) => {
  console.log(projects);
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            Work page
          </Heading>
        </Flex>
      </Container>

      <Masonry projects={projects} buttonmore={false} />
    </>
  );
};

export default Works;
