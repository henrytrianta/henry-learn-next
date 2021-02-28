import { Heading, Container, Flex, Box, Skeleton } from '@chakra-ui/react';
import React from 'react';

// Data Dynamic
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';

import Imgix from 'react-imgix';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import styles from '@/components/CSSModule/Masonry.module.scss';

// Animasi
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

// lodash
import { hasIn } from 'lodash';

lazySizes.cfg.loadedClass = styles.lazyloaded;

export async function getStaticProps({ params }) {
  const client = Client();

  const project = await client.query(
    Prismic.Predicates.at('my.project.uid', `${params.uid}`),
    {
      lang: '*',
    },
  );

  return {
    props: {
      project: project ? project.results[0] : [],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const client = Client();
  const projects = await client.query(
    Prismic.Predicates.at('document.type', 'project'),
    {
      orderings: '[my.project.date desc]',
      pageSize: 100,
    },
  );

  // Henry - copas from next documentation
  // Get the paths we want to pre-render based on posts
  // const paths = projects.map((post) => `/posts/${post.id}`);
  // const paths = ['/work/1'];
  const paths = projects.results.map((project) => `/work/${project.uid}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const Page = ({ project }) => (
  <>
    <Container maxW="xl">
      <Flex direction="row" py={16} justifyContent="center">
        <Heading>{RichText.asText(project.data.title)}</Heading>
      </Flex>
      <Box overflow="hidden">
        <Controller>
          <Scene duration={600} indicators triggerElement="trigger">
            <Timeline
              target={
                <>
                  {hasIn(
                    { project },
                    'project.data.featured_image.tablet.dimensions.height',
                  ) ? (
                    <Box className={`${styles.supportLazy}`}>
                      <Imgix
                        src={project.data.featured_image.url}
                        width={project.data.featured_image.dimensions.width}
                        height={project.data.featured_image.dimensions.height}
                        // add lazyload
                        className={`${styles.blurUp} lazyload`}
                        attributeConfig={{
                          src: 'data-src',
                          srcSet: 'data-srcset',
                          sizes: 'data-sizes',
                        }}
                        htmlAttributes={{
                          src: `${project.data.featured_image.url}&w=100`, // low quality image disini
                        }}
                      />
                    </Box>
                  ) : (
                    <Skeleton height="600px" />
                  )}
                </>
              }
            >
              <Tween from={{ scale: '1.5' }} />
              <Tween to={{ scale: '1' }} />
            </Timeline>
          </Scene>
          <Box className="trigger" />
        </Controller>
      </Box>
    </Container>
  </>
);

export default Page;
