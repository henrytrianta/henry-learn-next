import chakraTheme from '@chakra-ui/theme';
import modifier from './modifier';

import styles from './styles';

const theme = {
  ...chakraTheme,
  ...modifier,
  styles
};

export default theme;
