import { Container, Flex, Text, Stack, Heading } from '@chakra-ui/core';
import Hero from '@/components/Hero';
import { MotionBox, MotionFlex, MotionText } from '@/utils/animation';

const Datas = [
  {
    title: 'Who am I ?',
    desc:
      'Writing software is at the very core of what I do. Because, leaders who code are better judges of technical skill in people. Working as a project manager gives me opportunities to learn what they are doing and sometimes doing what they usually do'
  },
  { title: 'Why ?', desc: 'Because I like to take a hands-on approach to problem solving' },
  {
    title: 'When you decide to code ?',
    desc:
      'I thought I will be an artist, I like to see a colors, finally I found myself realize that I like to solve a puzzle, helping people solve their problem and then see their smile is a best part of mylife'
  },
  {
    title: 'Where you live ?',
    desc:
      'Bali, one of the best place to stay and code. Come here and we can talk together under the sun at a beach'
  },
  {
    title: 'How to discuss my problems ?',
    desc:
      'You need to know your problems and I will guide you, mostly for technical and digital stuff. Just hit the contact us menu and send me a message :)'
  }
];

const About = () => {
  return (
    <MotionBox exit={{ opacity: 0 }}>
      <Hero>About Me.</Hero>
      <Container maxW="xl">
        <Stack spacing="24px">
          {Datas.map((data, i) => {
            return (
              <MotionFlex key={i} direction={{ sm: 'column', lg: 'row' }}>
                <Flex w={{ sm: 'full', lg: '4/12' }}>
                  <MotionText initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: -100 }}>
                    Question 0{i + 1} — <strong>{data.title}</strong>
                  </MotionText>
                </Flex>
                <Flex w={{ sm: 'full', lg: '8/12' }} pt={{ sm: '10px', lg: '0' }}>
                  <Heading size="sm" lineHeight="1.5" fontFamily="Graphik" fontWeight="light">
                    {data.desc}
                  </Heading>
                </Flex>
              </MotionFlex>
            );
          })}
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default About;
