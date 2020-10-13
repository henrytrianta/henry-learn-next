import { useRouter } from 'next/router';
import { Heading, Container, Flex } from '@chakra-ui/core';

// Data Dynamic
import Prismic from 'prismic-javascript';
import { Client } from '@/utils/prismicHelpers';
import Header from '@/components/Header';

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const { ref } = previewData;
  const client = Client();

  // console node.
  console.log(params.uid);

  // const projects = await client.query(Prismic.Predicates.at('my.page.uid', params.uid), {
  //   orderings: '[my.project.date desc]',
  //   pageSize: 1,
  //   ...(ref ? { ref } : null)
  // });
  const projects = await client
    .query(Prismic.Predicates.at('my.page.uid', `${params.uid}`), { lang: '*' })
    .then((documents) => {
      return console.log(documents);
    });

  console.log(projects);

  return {
    props: {
      projects
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

const Page = ({ projects, params }) => {
  console.log(params);
  const router = useRouter();
  console.log(router.query.id);
  console.log(projects);
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={16} justifyContent="center">
          <Heading>{router.query.uid}</Heading>
        </Flex>
      </Container>
    </>
  );
};

export default Page;
