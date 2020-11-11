// Component
// import ProjectsHero from '@/components/ProjectsHero';
// import ProjectsMasonry from '@/components/ProjectsMasonry';
import Highlight from '@/components/Highlight';
import Hero from '@/components/Hero';

// Dynamic Data
import { getProjects, getHome } from '@/utils/queries';

// Prismic Helper
import { RichText } from 'prismic-reactjs';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/core';

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const home = await getHome(ref);
  const projects = await getProjects(4, 0, ref);

  return {
    props: {
      home,
      // projects: projects ? projects.results : [],
      preview
    },
    revalidate: 1
  };
}

const InitialTransition = () => {
  return (
    <>
      <Box position="absolute"></Box>
    </>
  );
};

const Home = ({ home, isFirstMount }) => {
  let stacks = home.data.stacks;

  return (
    <>
      {isFirstMount && <InitialTransition />}
      <Hero>
        {RichText.asText(home.data.headline)}{' '}
        {stacks.map((stack, i) => {
          return (
            <Highlight key={i} divider={i + 1 == stacks.length ? '. ' : ', '}>
              {stack.stack[0].text}
            </Highlight>
          );
        })}
      </Hero>
      {/* <ProjectsHero />
      <ProjectsMasonry projects={projects} buttonmore={true} /> */}
    </>
  );
};

export default Home;
