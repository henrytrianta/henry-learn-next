import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';

const About = () => {
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            About page
          </Heading>
        </Flex>
      </Container>

      <Container maxW="xl" h="100vh">
        <Flex direction="row" py={16}>
          This is about page. Test using chakra UI Hi my name is Henry Trianta, and i am working in
          Kesato as a Project Management. I was involved into some of the project that is happening
          inside our company, at the first time in Kesato, i was working in Quality Assurance role,
          making sure all the code is implemented well on all the project.
        </Flex>
      </Container>
    </>
  );
};

export default About;
