import { Box } from '@chakra-ui/react';

const Highlight = ({ children, divider, i }) => (
  <>
    <Box key={i} position="relative" display="inline">
      <Box key={i} display="inline">
        {children}
        {divider}
      </Box>
      <Box
        key={i}
        position="absolute"
        bg="palletGoldHard"
        opacity="0.3"
        width={divider ? '90%' : '100%'}
        height="16px"
        left="0"
        bottom="50%"
        transform="translateY(50%)"
        zIndex="-1"
      />
    </Box>
  </>
);

export default Highlight;
