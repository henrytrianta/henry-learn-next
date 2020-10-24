import { Container, Flex, Box, Heading, Link, Text, Button } from '@chakra-ui/core';
// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';

import ProjectsMasonry from '@/components/ProjectsMasonry';
import ReactPaginate from 'react-paginate';
import Router, { withRouter, useRouter } from 'next/router';
import styles from '@/components/CSSModule/Pagination.module.scss';
import { useEffect } from 'react';

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const { ref } = previewData;

  const client = Client();

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 4,
    page: params.page,
    ...(ref ? { ref } : null)
  });

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
  const client = Client();

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 4
    // ...(ref ? { ref } : null)
  });

  console.log(projects.total_pages);

  const pathni = projects.total_pages;
  let pathstatic = [];
  let i;
  for (i = 0; i < pathni; i++) {
    pathstatic.push(i + 1);
  }

  return {
    paths: pathstatic.map((i) => `/works/${i}`),
    fallback: false
  };
}

const Works = ({ projects, params, totalpages }) => {
  const router = useRouter();

  useEffect(() => {
    if (params.page == '1') {
      // router.push('/works/');
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

      <ReactPaginate
        // previousLabel={'PREV'}
        previousLabel={
          <Button
            borderWidth="1px"
            borderColor="lightgrey"
            fontSize="12px"
            borderRadius="0"
            variant="outline"
            _hover={{
              color: 'palletGoldSoft',
              bg: 'palletBlue'
            }}
          >
            Prev
          </Button>
        }
        nextLabel={
          <Button
            borderWidth="1px"
            borderColor="lightgrey"
            fontSize="12px"
            borderRadius="0"
            variant="outline"
            _hover={{
              color: 'palletGoldSoft',
              bg: 'palletBlue'
            }}
          >
            Next
          </Button>
        }
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={styles.active}
        containerClassName={styles.pagination}
        // subContainerClassName={'pages pagination'}
        pageCount={totalpages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        // Khusus di first.
        forcePage={params.page - 1}
        onPageChange={(page) => router.push('/works/' + (page.selected + 1))}
      />
    </>
  );
};

export default Works;
