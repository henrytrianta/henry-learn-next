import { Container } from '@chakra-ui/react';
import Subscriber from '@/components/Subscribe';
import Hero from '@/components/Hero';
import { MotionBox } from '@/utils/animation';

const Newsletter = () => (
  <MotionBox exit={{ opacity: 0 }}>
    <Hero center>
      Send me latest update.
      <br />I hate spam as well :)
    </Hero>
    <Container />
    <Container>
      <Subscriber />
    </Container>
  </MotionBox>
);

export default Newsletter;
