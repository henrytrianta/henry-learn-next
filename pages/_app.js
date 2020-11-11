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
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '@/lib/useMousePosition';
import Scrollbar from 'react-smooth-scrollbar';
import { useState, useEffect } from 'react';

const App = ({ Component, pageProps, router }) => {
  useAnalytics({ publicKey: 'analytics_pub_41f04aa307' });
  const { x, y } = useMousePosition();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <motion.div
        animate={{
          x: x,
          y: y
        }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', stiffness: 69 }}
      >
        <Box position="absolute" top="-15px" left="-15px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30">
            <defs />
            <path d="M256 0C115.03 0 0 115.05 0 256c0 140.97 115.05 256 256 256 140.97 0 256-115.05 256-256C512 115.03 396.95 0 256 0zm0 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
          </svg>
        </Box>
      </motion.div>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...SEO} />

        <Scrollbar damping={0.3} continuousScrolling={false}>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route} exit={{ opacity: 0 }}>
              <Component {...pageProps} isFirstMount={isFirstMount} />
            </motion.div>
          </AnimatePresence>
          <Footer />
        </Scrollbar>
      </ChakraProvider>
    </>
  );
};

export default App;
