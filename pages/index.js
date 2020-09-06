import { Container, Flex, Box, Heading, Link, Text, Grid } from '@chakra-ui/core';

// Dynamic Data
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

// AnehAneh
import Masonry from 'react-masonry-component';

// Data
let stacks = ['PHP', 'Javascript'];
let project = ['1', '2', '3', '4'];
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

export async function getStaticProps() {
  const home = await client.getSingle('homepage');
  const project = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 3
  });
  return {
    props: {
      home,
      project
    }
  };
}

export default function Home(props) {
  console.log(props);
  return (
    <>
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

      <Container maxW="xl" centerContent>
        <Flex direction="row" align="center" py={5}>
          <Heading
            width={{ base: 'full', md: 'full' }}
            size="sm"
            fontWeight="light"
            text="center"
            position="relative"
            marginBottom="150px"
          >
            <Text fontWeight="semibold">Selected Project.</Text>
            All work, all play
            <Box
              position="absolute"
              left="50%"
              borderLeft="1px"
              height="100px"
              transform="translate(-50%, 50px)"
            ></Box>
          </Heading>
        </Flex>
      </Container>

      <Container maxW="xl">
        <Masonry options={{ transitionDuration: 3 }}>
          <Box w={{ base: 'full', md: '1/2' }} h="50px" p="15px">
            <Box w="full" h="full"></Box>
          </Box>
          {project.map((map) => {
            return (
              <Box w={{ base: 'full', md: '1/2' }} h={map * 200 + 'px'} p="15px">
                <Box w="full" h="full" bg="black"></Box>
              </Box>
            );
          })}
        </Masonry>
      </Container>
    </>
  );
}
