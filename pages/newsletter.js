import { Container, Flex, Text, Stack } from '@chakra-ui/core';
import Subscriber from '@/components/Subscribe';
import Hero from '@/components/Hero';

const Newsletter = () => {
  return (
    <>
      <Hero center>
        Send me latest update.
        <br />I hate spam as well :)
      </Hero>
      <Container></Container>
      <Container>
        <Subscriber />
      </Container>
    </>
  );
};

export default Newsletter;
