import { Box } from '@chakra-ui/core';

const Highlight = ({ children, divider, i }) => {
  return (
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
        ></Box>
      </Box>
    </>
  );
};

export default Highlight;
