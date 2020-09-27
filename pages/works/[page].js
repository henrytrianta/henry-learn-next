import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';
// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';

import Masonry from '@/components/Masonry';
import ReactPaginate from 'react-paginate';
import Router, { withRouter, useRouter } from 'next/router';
import styles from './pagination.module.css';
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
    }
  };
}

export async function getStaticPaths() {
  const client = Client();

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 4
    // ...(ref ? { ref } : null)
  });

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
  console.log(params);
  const router = useRouter();

  useEffect(() => {
    if (params.page == '1') {
      router.push('/works/');
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

      <Masonry projects={projects} buttonmore={false} />

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        // initialPage={params.page - 1}
        pageCount={totalpages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        forcePage={params.page}
        // onPageChange={pagginationHandler}
        onPageChange={(page) => router.push('/works/' + (page.selected + 1))}
        containerClassName={styles.paginateWrap}
        subContainerClassName={styles.paginateInner}
        pageClassName={styles.paginateLi}
        pageLinkClassName={styles.paginateA}
        activeClassName={styles.paginateActive}
        nextLinkClassName={styles.paginateNextA}
        previousLinkClassName={styles.paginatePrevA}
        breakLinkClassName={styles.paginateBreakA}
      />
    </>
  );
};

export default Works;
