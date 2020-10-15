import { useRouter } from 'next/router';
import { Heading, Container, Flex } from '@chakra-ui/core';

// Data Dynamic
import Prismic from 'prismic-javascript';
import { Client } from '@/utils/prismicHelpers';
import Header from '@/components/Header';

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const { ref } = previewData;
  const client = Client();

  const projects = await client.query(Prismic.Predicates.at('my.project.uid', `${params.uid}`), {
    lang: '*'
  });

  return {
    props: {
      projects: projects ? projects.results : []
    }
  };
}

export async function getStaticPaths() {
  const client = Client();
  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 100
  });

  // Henry - copas from next documentation
  // Get the paths we want to pre-render based on posts
  // const paths = projects.map((post) => `/posts/${post.id}`);
  // const paths = ['/work/1'];
  const paths = projects.results.map((project) => {
    return `/work/${project.uid}`;
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

const Page = ({ projects }) => {
  console.log(projects);
  const router = useRouter();
  console.log(router.query.id);
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={16} justifyContent="center">
          <Heading>{projects[0].data.title[0].text}</Heading>
        </Flex>
      </Container>
    </>
  );
};

export default Page;
