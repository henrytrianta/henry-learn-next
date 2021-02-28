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
import Imgix from 'react-imgix';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

// Move to next/image
import Image from 'next/image';

lazySizes.cfg.loadedClass = styles.lazyloaded;

const ButtonMore = () => {
  return (
    <Box w={{ base: 'full' }} display="flex" justifyContent="flex-end">
      <NextLink href="/works">
        <Link fontWeight="700" my="20px">
          <Highlight>SEE ALL PROJECT</Highlight>
        </Link>
      </NextLink>
    </Box>
  );
};

const ProjectsMasonry = ({ projects, buttonmore = true }) => {
  return (
    <Skeleton isLoaded={projects}>
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

            return (
              <NextLink href="/works" key={project.id} href={`/work/${project.uid}`} passHref>
                <Box w="full" mt={i == 0 ? { base: '0px', md: '150px' } : ''} cursor="pointer">
                  <Box
                    display="flex"
                    className={styles.supportLazy}
                    position="relative"
                    transition="ease all 0.2s"
                    _hover={{ transform: 'scale(0.96)', transition: 'ease all 0.2s' }}
                    height={existHeight ? '' : ''}
                  >
                    {existHeight ? (
                      // <Imgix
                      //   src={project.data.featured_image.tablet.url}
                      //   width={project.data.featured_image.tablet.dimensions.width}
                      //   height={project.data.featured_image.tablet.dimensions.height}
                      //   // add lazyload
                      //   className={`${styles.blurUp} lazyload`}
                      //   attributeConfig={{
                      //     src: 'data-src',
                      //     srcSet: 'data-srcset',
                      //     sizes: 'data-sizes'
                      //   }}
                      //   htmlAttributes={{
                      //     src: project.data.featured_image.url + '&w=50' // low quality image disini
                      //   }}
                      // />
                      <Image
                        src={project.data.featured_image.url}
                        width={project.data.featured_image.tablet.dimensions.width}
                        height={project.data.featured_image.tablet.dimensions.height}
                      ></Image>
                    ) : (
                      // <img
                      //   src={`https://picsum.photos/id/${i + 2 * 10}/50/50`}
                      //   data-sizes="auto"
                      //   data-src={`https://picsum.photos/id/${i + 2 * 10}/800/800`}
                      //   className={`${styles.blurUp} lazyload`}
                      // />
                      <Image
                        src={`https://picsum.photos/id/${i + 2 * 10}/800/800`}
                        width="800px"
                        height="600px"
                        unoptimized
                      ></Image>
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
};

export default ProjectsMasonry;
