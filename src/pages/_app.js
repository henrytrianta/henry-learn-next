import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
// import NprogressComponent from '@/components/Nprogress';
import theme from '@/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import Header from '@/components/Header';
import GoogleFonts from 'next-google-fonts';
import Footer from '@/components/Footer';
import { useAnalytics } from '@happykit/analytics';
import { AnimatePresence } from 'framer-motion';
import useMousePosition from '@/utils/useMousePosition';
import { useState, useEffect } from 'react';
import { MotionBox } from '@/utils/animation';

const App = ({ Component, pageProps, router }) => {
  console.log(router.route);

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
      {/* <MotionBox
        position="absolute"
        top="-15px"
        left="-15px"
        animate={{
          x: x,
          y: y
        }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', stiffness: 69 }}
        width="30px"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%">
          <defs />
          <path d="M256 0C115.03 0 0 115.05 0 256c0 140.97 115.05 256 256 256 140.97 0 256-115.05 256-256C512 115.03 396.95 0 256 0zm0 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
        </svg>
      </MotionBox> */}
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...SEO} />
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} isFirstMount={isFirstMount} key={router.route} />
        </AnimatePresence>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
