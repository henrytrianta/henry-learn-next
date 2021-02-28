// Component
import ProjectsHero from '@/components/ProjectsHero';
import ProjectsMasonry from '@/components/ProjectsMasonry';
import Highlight from '@/components/Highlight';
import Hero from '@/components/Hero';

// Dynamic Data
import { getProjects, getHome } from '@/utils/queries';

// Prismic Helper
import { RichText } from 'prismic-reactjs';
import { MotionBox } from '@/utils/animation';
import InitialTransition from '@/components/InitialTransition';

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const home = await getHome(ref);
  const projects = await getProjects(4, 0, ref);

  return {
    props: {
      home,
      projects: projects ? projects.results : [],
      preview
    },
    revalidate: 1
  };
}

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 }
  }
});

const Home = ({ home, isFirstMount, projects }) => {
  let stacks = home.data.stacks;

  return (
    <MotionBox exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}
      <MotionBox initial="initial" animate="animate" variants={content(isFirstMount)}>
        <Hero initial={{ y: -10 }} animate={{ y: 10 }}>
          {RichText.asText(home.data.headline)}{' '}
          {stacks.map((stack, i) => {
            return (
              <Highlight key={i} divider={i + 1 == stacks.length ? '. ' : ', '}>
                {stack.stack[0].text}
              </Highlight>
            );
          })}
        </Hero>
      </MotionBox>
      <ProjectsHero />
      <ProjectsMasonry projects={projects} buttonmore={true} />
    </MotionBox>
  );
};

export default Home;
