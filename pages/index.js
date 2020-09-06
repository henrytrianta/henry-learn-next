import { Container, Flex, Box, Heading, Link, Text, Grid } from '@chakra-ui/core';

// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

// Masonry
import Masonry from 'react-masonry-component';

// Animasi
import { Controller, Scene } from 'react-scrollmagic';
import { Controls, PlayState, Tween } from 'react-gsap';

// Data
const Stack = ({ stack, children, i }) => {
  return (
    <>
      <Box key={i} position="relative" display="inline">
        <Box key={i} display="inline">
          {stack}
          {children}
        </Box>
        <Box
          key={i}
          position="absolute"
          bg="highlight"
          width="90%"
          height="16px"
          left="0"
          bottom="8px"
        ></Box>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const home = await client.getSingle('homepage');
  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 3
  });
  return {
    props: {
      home,
      projects
    }
  };
}

export default function Home({ home, projects }) {
  console.log(home);
  console.log(projects);

  let projectDummy = ['1', '2', '3', '4'];
  let stacks = home.data.stacks;

  return (
    <>
      <Container maxW="xl" centerContent>
        <Flex direction="row" align="center" py={24}>
          <Heading w={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light" text="center">
            {home.data.headline[0].text}{' '}
            {stacks.map((stack, i) => {
              return (
                <Stack key={i} stack={stack.stack[0].text}>
                  {i + 1 == stacks.length ? '. ' : ', '}
                </Stack>
              );
            })}
            <br />
            Please find below my work. Enjoy
          </Heading>
        </Flex>
      </Container>

      <Container maxW="xl" centerContent>
        <Flex direction="column" align="center" py={5} bg="white" zIndex="1">
          <Controller>
            <Scene triggerElement=".projects-title" duration={300}>
              <Tween to={{ y: '50px' }} duration={2} ease="back.out(1.7)">
                <Heading
                  width={{ base: 'full', md: 'full' }}
                  fontWeight="light"
                  text="center"
                  size="sm"
                  className="projects-title"
                >
                  <Text fontWeight="semibold">Selected Project.</Text>
                  All work, all play
                </Heading>
              </Tween>
            </Scene>

            <Scene triggerElement=".projects-garis" duration={300}>
              <Tween
                from={{ y: '50px' }}
                to={{ y: '-20px', opacity: '0', height: '50px' }}
                duration={1}
                ease="back.out(1.7)"
              >
                <Box position="relative" height="150px" className="projects-garis">
                  <Box
                    position="absolute"
                    left="50%"
                    borderLeft="2px"
                    height="100%"
                    transform="translate(-50%, 50px)"
                  ></Box>
                </Box>
              </Tween>
            </Scene>
          </Controller>
        </Flex>
      </Container>

      <Container maxW="xl">
        <Masonry options={{ transitionDuration: 3 }}>
          <Box w={{ base: 'full', md: '1/2' }} h="50px" p="15px">
            <Box w="full" h="full"></Box>
          </Box>
          {projects.results.map((project, i) => {
            return (
              <Box
                key={project.id}
                w={{ base: 'full', md: '1/2' }}
                h={'400px'}
                // masih bisa diimprove
                pl={i % 2 == 0 ? '15px' : ''}
                pr={i % 2 == 0 ? '' : '15px'}
                py="15px"
              >
                <Box w="full" h="full" bg="black"></Box>
                {project.data.title[0].text}
              </Box>
            );
          })}
        </Masonry>
      </Container>
    </>
  );
}
