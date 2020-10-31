import { Container, Flex, Heading } from '@chakra-ui/core';
// Component
import ProjectsMasonry from '@/components/ProjectsMasonry';
import ProjectsPaginate from '@/components/ProjectsPaginate';
import Hero from '@/components/Hero';

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
      <Hero>Work page</Hero>
      <ProjectsMasonry projects={projects} buttonmore={false} />
      <ProjectsPaginate totalpages={totalpages} page={0} />
    </>
  );
};

export default Works;
