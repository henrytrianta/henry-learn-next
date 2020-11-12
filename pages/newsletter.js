import { Container, Flex, Text, Stack } from '@chakra-ui/core';
import Subscriber from '@/components/Subscribe';
import Hero from '@/components/Hero';
import { MotionBox } from '@/utils/animation';

const Newsletter = () => {
  return (
    <MotionBox exit={{ opacity: 0 }}>
      <Hero center>
        Send me latest update.
        <br />I hate spam as well :)
      </Hero>
      <Container></Container>
      <Container>
        <Subscriber />
      </Container>
    </MotionBox>
  );
};

export default Newsletter;
