import { useRouter } from 'next/router';
import { Heading, Container, Flex, Box } from '@chakra-ui/core';
import React from 'react';

// Data Dynamic
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Client } from '@/utils/prismicHelpers';
import Header from '@/components/Header';

import Imgix from 'react-imgix';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';
lazySizes.cfg.loadedClass = styles.lazyloaded;
import styles from '@/components/CSSModule/Masonry.module.scss';

// Animasi
import { Controller, Scene } from 'react-scrollmagic';
import { Controls, PlayState, Tween, Timeline } from 'react-gsap';

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const { ref } = previewData;
  const client = Client();

  const project = await client.query(Prismic.Predicates.at('my.project.uid', `${params.uid}`), {
    lang: '*'
  });

  return {
    props: {
      project: project ? project.results[0] : []
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const client = Client();
  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 100
  });

  // Henry - copas from next documentation
  // Get the paths we want to pre-render based on posts
  // const paths = projects.map((post) => `/posts/${post.id}`);
  // const paths = ['/work/1'];
  const paths = projects.results.map((project) => {
    return `/work/${project.uid}`;
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const Page = ({ project }) => {
  console.log(project);
  const router = useRouter();
  console.log(router.query.id);
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={16} justifyContent="center">
          <Heading>{RichText.asText(project.data.title)}</Heading>
        </Flex>
        <Box overflow="hidden">
          <Controller>
            <Scene duration={400} indicators={true} triggerElement="trigger">
              <Timeline
                target={
                  <>
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
                          sizes: 'data-sizes'
                        }}
                        htmlAttributes={{
                          src: project.data.featured_image.url + '&w=100' // low quality image disini
                        }}
                      />
                    </Box>
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
        {/* <Controller>
          <Scene triggerElement="" duration={1000}>
            <>
              <Box className={styles.supportLazy} position="sticky">
                <Imgix
                  src={project.data.featured_image.url}
                  width={project.data.featured_image.dimensions.width}
                  height={project.data.featured_image.dimensions.height}
                  // add lazyload
                  className={`${styles.blurUp} lazyload`}
                  attributeConfig={{
                    src: 'data-src',
                    srcSet: 'data-srcset',
                    sizes: 'data-sizes'
                  }}
                  htmlAttributes={{
                    src: project.data.featured_image.url + '&w=100' // low quality image disini
                  }}
                />
              </Box>
            </>
          </Scene>
        </Controller> */}
      </Container>
    </>
  );
};

export default Page;
