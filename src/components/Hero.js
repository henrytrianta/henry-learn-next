import { Container, Flex, Heading } from '@chakra-ui/react';

const Hero = ({ children, center }) => (
  <Container maxW="xl" centerContent={center && true}>
    <Flex direction="row" align="center" py={{ base: '16', md: '24' }}>
      <Heading
        w={{ base: 'full', md: !center && '4/5' }}
        size="lg"
        fontWeight="light"
        text="center"
      >
        {children}
      </Heading>
    </Flex>
  </Container>
);

export default Hero;
