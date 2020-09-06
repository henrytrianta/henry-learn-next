import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';

export default function About() {
  return (
    <Container maxW="xl">
      <Flex direction="row" py={24}>
        <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
          About us page
        </Heading>
      </Flex>
    </Container>
  );
}
