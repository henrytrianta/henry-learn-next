import { mode } from '@chakra-ui/theme-tools';
import { shadow } from '@chakra-ui/core';

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.700', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'normal',
      minHeight: 'full'
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props)
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word'
    },
    // remove focus chakra
    '*:focus': {
      boxShadow: 'unset!important',
      outline: 'none!important'
    },
    fontFeatureSettings: `'kern'`,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    // masonry
    '.masonry': {
      d: 'flex',
      w: '100%',
      '&--column': {
        backgroundClip: 'padding-box',
        '&:first-of-type': {
          pr: '15px'
        },
        '&:last-child': {
          pl: '15px'
        },
        '> div': {
          mb: '20px'
        }
      }
    }
  })
};

export default styles;
