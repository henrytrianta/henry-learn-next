import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/core';
import Nprogress from '@/components/nprogress';
import theme from '@/design-system';
import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import Header from '@/components/Header';
import GoogleFonts from 'next-google-fonts';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...SEO} />
        <Nprogress />
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
