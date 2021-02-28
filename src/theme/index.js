import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundation Henry
import foundations from './foundations';

const overrides = {
  styles,
  ...foundations,
  components: {},
};

export default extendTheme(overrides);
