import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  Text,
  Grid,
  Icon,
  Image,
  Skeleton
} from '@chakra-ui/core';
import Masonry from 'react-masonry-css';
import NextLink from 'next/link';

import styles from '@/components/CSSModule/Masonry.module.css';

// lodash
import { hasIn } from 'lodash';

// React Imgix with Lazy Sizes
import Imgix from 'react-imgix';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

const ButtonMore = () => {
  return (
    <Box w={{ base: 'full' }} display="flex" justifyContent="flex-end">
      <NextLink href="/works">
        <Link fontWeight="700" my="20px">
          SEE ALL PROJECT
        </Link>
      </NextLink>
    </Box>
  );
};

const MasonryComponent = ({ projects, buttonmore = true }) => {
  console.log(projects);
  return (
    <Container maxW="xl">
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        className={styles.masonry}
        columnClassName={styles.masonryColumn}
      >
        {projects.map((project, i) => {
          let existHeight = hasIn(
            { project },
            'project.data.featured_image.tablet.dimensions.height'
          );
          // if exist lodash
          let height;
          if (existHeight) {
            height = project.data.featured_image.tablet.dimensions.height;
          }
          let staticHeight = (i + 3) * 2 + '00px';
          let staticHeightWithoutPX = (i + 3) * 2 + '00';

          return (
            <NextLink href="/works" key={project.id} href={`/work/${project.uid}`} passHref>
              <Box
                w="full"
                mt={i == 0 ? '50px' : ''}
                transition="ease all 0.2s"
                _hover={{ transform: 'scale(0.985)', transition: 'ease all 0.2s' }}
                cursor="pointer"
              >
                {existHeight ? (
                  <Imgix
                    src={project.data.featured_image.url}
                    width={project.data.featured_image.dimensions.width}
                    height={project.data.featured_image.dimensions.height}
                    // add lazyload
                    className="lazyload"
                    attributeConfig={{
                      src: 'data-src',
                      srcSet: 'data-srcset',
                      sizes: 'data-sizes'
                    }}
                    htmlAttributes={{
                      src: project.data.featured_image.url + '&w=100' // low quality image disini
                    }}
                  />
                ) : (
                  <Box
                    display="flex"
                    className={styles.supportLazy}
                    height="400px"
                    position="relative"
                  >
                    <img
                      src={`https://picsum.photos/id/${i + 2 * 10}/50/50`}
                      data-sizes="auto"
                      data-src={`https://picsum.photos/id/${i + 2 * 10}/800/800`}
                      className="lazyload blur-up"
                    />
                  </Box>
                )}
                <Text pt="10px" align="center" fontSize="18px" fontWeight="500">
                  {project.data.title[0].text}
                </Text>
              </Box>
            </NextLink>
          );
        })}
      </Masonry>
      {buttonmore ? <ButtonMore /> : ''}
    </Container>
  );
};

export default MasonryComponent;
