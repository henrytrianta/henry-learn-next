import Head from 'next/head';
import { ChakraProvider, Box } from '@chakra-ui/core';
// import NprogressComponent from '@/components/Nprogress';
import theme from '@/design-system';
import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import Header from '@/components/Header';
import GoogleFonts from 'next-google-fonts';
import Footer from '@/components/Footer';
import { useAnalytics } from '@happykit/analytics';
import { motion } from 'framer-motion';
import useMousePosition from '@/lib/useMousePosition';
import Scrollbar from 'react-smooth-scrollbar';

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

const App = ({ Component, pageProps, router }) => {
  useAnalytics({ publicKey: 'analytics_pub_41f04aa307' });
  const { x, y } = useMousePosition();

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...SEO} />
        <motion.div
          animate={{
            x: x,
            y: y,
            opacity: 1
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Box position="absolute">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <circle fill="black" cx="4" cy="4" r="4" />
            </svg>
          </Box>
        </motion.div>
        <Scrollbar damping={0.5} continuousScrolling={false} alwaysShowTracks={true}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Scrollbar>
      </ChakraProvider>
    </>
  );
};

export default App;
