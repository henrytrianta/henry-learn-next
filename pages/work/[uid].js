import { useRouter } from 'next/router';

// Data Dynamic
import Prismic from 'prismic-javascript';
import { client } from '@/prismic-configuration';

export async function getStaticProps({ params }) {
  const { uid } = params;
  console.log(uid);

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 2
  });

  return {
    props: {
      projects
    }
  };
}

export async function getStaticPaths() {
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
  console.log(router);
  console.log(projects);
  return (
    <>
      <div>Test</div>
      <div>UID : {router.query.uid}</div>
      {/* <MasonryComponent projects={projects} /> */}
    </>
  );
};

export default Page;
