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

const Home = ({ home }) => {
  let stacks = home.data.stacks;

  return (
    <>
      {/* <motion.div exit={{ opacity: 0 }}> */}
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
      {/* </motion.div> */}
    </>
  );
};

export default Home;
