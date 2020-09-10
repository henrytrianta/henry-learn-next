import { Container, Flex, Box, Heading, Link, Text, Grid, Icon, Image } from '@chakra-ui/core';
import Masonry from 'react-masonry-css';
import NextLink from 'next/link';

// lodash
import { hasIn } from 'lodash';

const ButtonMore = () => {
  return (
    <Box w={{ base: 'full' }} display="flex" justifyContent="center" py="25px">
      <NextLink href="/works">
        <Link fontWeight="700" my="20px">
          SEE ALL PROJECT
        </Link>
      </NextLink>
    </Box>
  );
};

const MasonryComponent = ({ projects, buttonmore = true }) => {
  return (
    <Container maxW="xl">
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        className="masonry"
        columnClassName="masonry--column"
      >
        {projects.map((project, i) => {
          let existHeight = hasIn(
            { project },
            'project.data.featured_image.tablet.dimensions.height'
          );
          let height;
          // if exist lodash
          if (existHeight) {
            height = project.data.featured_image.tablet.dimensions.height;
          }

          let staticHeight = (i + 3) * 2 + '00px';

          return (
            <Box key={project.id} w={{ base: 'full', md: 'full' }}>
              <Box w="full" h="full" bg="black"></Box>
              {/* <LazyLoad height={existHeight ? height : staticHeight}> */}
              <Image
                className="gambar-mason"
                src={
                  existHeight
                    ? project.data.featured_image.tablet.url
                    : 'https://via.placeholder.com/1000x' + (i + 3) * 2 + '00'
                }
                alt=""
                onLoad={() => {
                  console.log('loaded single masonry');
                }}
              />
              {/* </LazyLoad> */}
              {project.data.title[0].text}
            </Box>
          );
        })}
      </Masonry>
      {buttonmore ? <ButtonMore /> : ''}
    </Container>
  );
};

export default MasonryComponent;
