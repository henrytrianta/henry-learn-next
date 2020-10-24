import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';

const About = () => {
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            About Me.
          </Heading>
        </Flex>
      </Container>

      <Container maxW="xl" h="100vh" display="flex">
        <Flex w="4/12">
          <Text>
            Chapter 01 — <strong>Agency</strong>
          </Text>
        </Flex>
        <Flex w="8/12" fontSize="25px" lineHeight="1.5" fontWeight="light" fontFamily="Graphik">
          Exo Ape is a digital design-driven agency that crafts immersive experiences that inspire,
          affect and delight in a digital-first world.
        </Flex>
      </Container>
    </>
  );
};

export default About;
