import { Container, Flex, Box, Heading, Text } from '@chakra-ui/core';

// Animasi
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const ProjectsHero = () => {
  return (
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
  );
};

export default ProjectsHero;
