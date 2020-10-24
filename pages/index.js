import { Container, Flex, Box, Heading, Link, Text, Grid, Icon, Button } from '@chakra-ui/core';
import { useRemoteData, useEffect } from 'react';

// Component
import ProjectsMasonry from '@/components/ProjectsMasonry';

// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';

// Animasi
import { Controller, Scene } from 'react-scrollmagic';
import { Controls, PlayState, Tween } from 'react-gsap';

// Highlight
import Highlight from '@/components/Highlight';

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const home = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date]',
    pageSize: 4,
    ...(ref ? { ref } : null)
  });

  return {
    props: {
      home,
      projects: projects ? projects.results : [],
      preview
    },
    revalidate: 1
  };
}

const Home = ({ home, projects }) => {
  let stacks = home.data.stacks;

  return (
    <>
      <Container maxW="xl" centerContent>
        <Flex direction="row" align="center" py={24}>
          <Heading w={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light" text="center">
            {home.data.headline[0].text}{' '}
            {stacks.map((stack, i) => {
              return (
                <Highlight key={i} divider={i + 1 == stacks.length ? '. ' : ', '}>
                  {stack.stack[0].text}
                </Highlight>
              );
            })}
            <br />
            Please find below my work. Enjoy
          </Heading>
        </Flex>
      </Container>

      <Container maxW="xl" centerContent>
        <Flex direction="column" align="center" py={5} zIndex="1">
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
                // ease="back.out(1.7)"
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

      <ProjectsMasonry projects={projects} buttonmore={true} />
    </>
  );
};

export default Home;
