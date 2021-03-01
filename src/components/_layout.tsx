import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { DefaultSeo } from 'next-seo';

import SEO from '@/next-seo.config';
import Header from './Headerv2';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
