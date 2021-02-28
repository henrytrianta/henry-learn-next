import { Container, Box, Link, Text, Skeleton } from '@chakra-ui/react';
import Masonry from 'react-masonry-css';
import NextLink from 'next/link';

import Highlight from '@/components/Highlight';

import styles from '@/components/CSSModule/Masonry.module.scss';

// lodash
import { hasIn } from 'lodash';

// Prismic Helper
import { RichText } from 'prismic-reactjs';

// React Imgix with Lazy Sizes
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

// Move to next/image
import Image from 'next/image';

lazySizes.cfg.loadedClass = styles.lazyloaded;

const ButtonMore = () => (
  <Box w={{ base: 'full' }} display="flex" justifyContent="flex-end">
    <NextLink href="/works">
      <Link fontWeight="700" my="20px">
        <Highlight>SEE ALL PROJECT</Highlight>
      </Link>
    </NextLink>
  </Box>
);

const ProjectsMasonry = ({ projects, buttonmore = true }) => (
  <Skeleton isLoaded={projects}>
    <Container maxW="xl">
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        className={styles.masonry}
        columnClassName={styles.masonryColumn}
      >
        {projects.map((project, i) => {
          const existHeight = hasIn(
            { project },
            'project.data.featured_image.tablet.dimensions.height',
          );
          // if exist lodash

          return (
            <NextLink key={project.id} href={`/work/${project.uid}`} passHref>
              <Box
                w="full"
                mt={i === 0 ? { base: '0px', md: '150px' } : ''}
                cursor="pointer"
              >
                <Box
                  display="flex"
                  className={styles.supportLazy}
                  position="relative"
                  transition="ease all 0.2s"
                  _hover={{
                    transform: 'scale(0.96)',
                    transition: 'ease all 0.2s',
                  }}
                  height={existHeight ? '' : ''}
                >
                  {existHeight ? (
                    <Image
                      src={project.data.featured_image.url}
                      width={
                        project.data.featured_image.tablet.dimensions.width
                      }
                      height={
                        project.data.featured_image.tablet.dimensions.height
                      }
                    />
                  ) : (
                    <Image
                      src={`https://picsum.photos/id/${i + 2 * 10}/800/800`}
                      width="800px"
                      height="600px"
                      unoptimized
                    />
                  )}
                </Box>
                <Text pt="10px" align="center" fontSize="18px">
                  {RichText.asText(project.data.title)}
                </Text>
              </Box>
            </NextLink>
          );
        })}
      </Masonry>
      {buttonmore ? <ButtonMore /> : ''}
    </Container>
  </Skeleton>
);

export default ProjectsMasonry;
