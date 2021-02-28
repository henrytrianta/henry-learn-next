import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    '@font-face': {
      fontFamily: 'Graphik',
      src: "url('/static/fonts/Graphik/Graphik-Light.otf') format('opentype')",
      fontWeight: 300,
    },
    body: {
      fontFamily: 'body',
      fontWeight: 400,
      color: mode('gray.700', 'whiteAlpha.900')(props),
      bg: mode('palletWhite', 'white')(props),
      lineHeight: 'normal',
      minHeight: '100vh',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
      fontSize: 'sm',
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word',
    },
    // remove focus chakra
    '*:focus': {
      boxShadow: 'unset!important',
      outline: 'none!important',
    },
    '.scroll-content': {
      width: '100vw',
      height: '100vh',
    },
    fontFeatureSettings: `'kern'`,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
  }),
};

export default styles;
