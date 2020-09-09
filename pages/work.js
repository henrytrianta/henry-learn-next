import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';
// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

export async function getStaticProps() {
  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 3
  });

  return {
    props: {
      projects
    }
  };
}

const Work = ({ projects }) => {
  console.log(projects);
  return (
    <Container maxW="xl">
      <Flex direction="row" py={24}>
        <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
          Work page
        </Heading>
      </Flex>
    </Container>
  );
};

export default Work;
