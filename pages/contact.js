import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';

import FormContact from '@/components/FormContact';

const Contact = () => {
  return (
    <>
      <Container maxW="xl">
        <Flex direction="column" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            Contact Me.
          </Heading>
          <Text>
            Just put your message below and proof that you are a human. After, we can have a
            chit-chat as a human
          </Text>
        </Flex>
      </Container>
      <Container maxW="xl">
        <FormContact />
      </Container>
    </>
  );
};

export default Contact;
