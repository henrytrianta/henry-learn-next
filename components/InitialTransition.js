import { MotionBox, MotionHeading } from '@/utils/animation';
import { Heading } from '@chakra-ui/core';
import { useState } from 'react';

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  useState(() => {
    typeof windows !== 'undefined' && window.scrollTo(0, 0);
  }, []);

  return (
    <MotionBox
      position="absolute"
      zIndex="50"
      d="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vw"
      bg="black"
      initial="initial"
      animate="animate"
      variants={blackBox}
    >
      <MotionBox variants={textContainer} position="absolute" zIndex="50" d="flex">
        <MotionBox variants={text} w="100%" h="100%" fill="currentColor" color="blue">
          <MotionHeading>Welcome to Henry</MotionHeading>
        </MotionBox>
      </MotionBox>
      {/* <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: 'url(#pattern)' }}
        >
          tailstore
        </text>
      </motion.svg> */}
    </MotionBox>
  );
};

const blackBox = {
  initial: {
    height: '100%',
    bottom: 0
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};

const text = {
  initial: {
    y: 40
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};

const textContainer = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren'
    }
  }
};

export default InitialTransition;
