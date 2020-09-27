import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';
// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';

import Masonry from '@/components/Masonry';
import ReactPaginate from 'react-paginate';

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 4,
    ...(ref ? { ref } : null)
  });

  const pathni = projects.total_pages;
  let pathstatic = [];
  let i;
  for (i = 0; i < pathni; i++) {
    pathstatic.push(i + 1);
  }
  let pathmap = pathstatic.map((doc) => `/blog/${doc}`);

  return {
    props: {
      projects: projects ? projects.results : [],
      preview,
      debug: pathmap
    }
  };
}

const Works = ({ projects, debug }) => {
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
