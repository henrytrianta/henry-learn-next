import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';

import FormContact from '@/components/FormContact';

const Contact = () => {
  return (
    <>
      <Container maxW="xl">
        <Flex direction="column" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            Contact page
          </Heading>
          <Text>Contact me.</Text>
        </Flex>
      </Container>
      <Container maxW="xl">
        <FormContact />
      </Container>
    </>
  );
};

export default Contact;
