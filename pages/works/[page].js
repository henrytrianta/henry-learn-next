import { useRouter } from 'next/router';
import useSWR from 'swr';

// Data Dynamic
import Prismic from 'prismic-javascript';
import { client } from '@/prismic-configuration';
import { useEffect } from 'react';

// export async function getStaticProps() {
//   const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
//     orderings: '[my.project.date desc]',
//     pageSize: 100
//   });

//   return {
//     props: {
//       projects
//     }
//   };
// }

// export async function getStaticPaths() {
//   const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
//     orderings: '[my.project.date desc]',
//     pageSize: 100
//   });

//   // Henry - copas from next documentation
//   // Get the paths we want to pre-render based on posts
//   // const paths = projects.map((post) => `/posts/${post.id}`);
//   // const paths = ['/work/1'];
//   const paths = projects.results.map((project) => {
//     return `/works/${project.uid}`;
//   });

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true };
// }

const Page = ({ projects, joke }, props) => {
  const router = useRouter();

  async function fetcher() {
    await client.query(Prismic.Predicates.at('document.type', 'project'), {
      orderings: '[my.project.date desc]',
      pageSize: 100
    });
  }

  //   const { data } = useSWR('', fetcher);

  console.log(fetcher);

  return (
    <>
      <div>Test</div>
      <div>UID : {router.query.page}</div>
      <div>Joke : {joke}</div>
      {/* <MasonryComponent projects={projects} /> */}
    </>
  );
};

// Joke
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const rsp = await fetch('https://api.icndb.com/jokes/random'),
    data = await rsp.json();
  const joke = data.value.joke;

  // Pass data to the page via props
  return { props: { joke } };
}

async function fetchQuote() {
  const rsp = await fetch('https://api.icndb.com/jokes/random'),
    data = await rsp.json();
  return { props: { data } };
}

export default Page;
