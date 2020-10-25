import { Container, Flex, Heading } from '@chakra-ui/core';
// Dynamic Data
import ProjectsMasonry from '@/components/ProjectsMasonry';
import ProjectsPaginate from '@/components/ProjectsPaginate';

import { getProjects } from '@/utils/queries';

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const projects = await getProjects(4, 0, ref);

  return {
    props: {
      projects: projects ? projects.results : [],
      totalpages: projects ? projects.total_pages : [],
      preview
    },
    revalidate: 1
  };
}

const Works = ({ projects, totalpages }) => {
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            Work page
          </Heading>
        </Flex>
      </Container>

      <ProjectsMasonry projects={projects} buttonmore={false} />
      <ProjectsPaginate totalpages={totalpages} page={0} />
    </>
  );
};

export default Works;
