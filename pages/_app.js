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
import Router from 'next/router';
import { useState, useEffect } from 'react';

const App = ({ Component, pageProps, router }) => {
  useAnalytics({ publicKey: 'analytics_pub_41f04aa307' });
  const { x, y } = useMousePosition();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('App is changing to: ', url);
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
        <Box position="absolute">
          <svg width="20px" viewBox="0 0 10 10">
            <circle fill="black" cx="4" cy="4" r="4" />
          </svg>
        </Box>
      </motion.div>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...SEO} />

        <Scrollbar damping={0.3} continuousScrolling={false}>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route} exit={{ opacity: 0, y: 100 }}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
          <Footer />
        </Scrollbar>
      </ChakraProvider>
    </>
  );
};

export default App;
