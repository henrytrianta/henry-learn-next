import { Container, Flex, Box, Heading, Link, Text } from '@chakra-ui/core';

// Data
const stacks = ['PHP', 'Javascript'];
const Stack = ({ stack, children, i }) => {
  return (
    <>
      <Box key={i} position="relative" display="inline">
        <Box key={i} display="inline">
          {stack}
          {children}
        </Box>
        <Box
          key={i}
          position="absolute"
          bg="highlight"
          width="90%"
          height="16px"
          left="0"
          bottom="8px"
        ></Box>
      </Box>
    </>
  );
};

export default function Home() {
  return (
    <Container maxW="xl" centerContent>
      <Flex direction="row" align="center" py={24}>
        <Heading w={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light" text="center">
          Hi, my name is Henry, currently working in Kesato as a Project Manager. I learned to do
          some of the languages such as{' '}
          {stacks.map((stack, i) => {
            return (
              <Stack key={i} stack={stack}>
                {i + 1 == stacks.length ? '. ' : ', '}
              </Stack>
            );
          })}
          <br />
          Please find below my work. Enjoy
        </Heading>
      </Flex>
    </Container>
  );
}
