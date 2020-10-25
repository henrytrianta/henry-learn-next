import { Container, Flex, Heading } from '@chakra-ui/core';
// Dynamic Data
import { getProjects } from '@/utils/queries';

import ProjectsMasonry from '@/components/ProjectsMasonry';
import ProjectsPaginate from '@/components/ProjectsPaginate';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const { ref } = previewData;
  const projects = await getProjects(4, params.page, ref);

  return {
    props: {
      projects: projects ? projects.results : [],
      totalpages: projects ? projects.total_pages : [],
      preview,
      params
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const projects = await getProjects(4);
  const totalpage = projects.total_pages;
  let path = [];
  let i;

  for (i = 0; i < totalpage; i++) {
    path.push(i + 1);
  }

  return {
    paths: path.map((i) => `/works/${i}`),
    fallback: false
  };
}

const Works = ({ projects, params, totalpages }) => {
  const router = useRouter();
  useEffect(() => {
    if (params.page == '1') {
      router.push('/works', undefined, { shallow: true });
    }
  });

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
      <ProjectsPaginate totalpages={totalpages} page={params.page - 1} />
    </>
  );
};

export default Works;
