import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, Box, Icon } from '@chakra-ui/react';

import NowPlaying from '@/components/NowPlaying';

// Icon
import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiTwitterLine,
  RiFacebookLine,
} from 'react-icons/ri';

const Footer = () => (
  <Flex align="center" mt="24" mb="4" direction="column">
    <NowPlaying />
    <Box mb="15px">
      <Link
        href="https://facebook.com/henrytrianta"
        title="Facebook"
        isExternal
        mx="10px"
      >
        <Icon as={RiFacebookLine} fill="red" />
      </Link>
      <Link
        href="https://twitter.com/henrytrianta"
        title="Twitter"
        isExternal
        mx="10px"
      >
        <Icon as={RiTwitterLine} fill="red" />
      </Link>
      <Link
        href="https://github.com/henrytrianta"
        title="GitHub"
        isExternal
        mx="10px"
      >
        <Icon as={RiGithubLine} fill="red" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/henrytrianta"
        title="LinkedIn"
        isExternal
        mx="10px"
      >
        <Icon as={RiLinkedinLine} fill="red" />
      </Link>
      <Link href="mailto:hello@henry.pm" title="Email" isExternal mx="10px">
        <Icon as={RiMailLine} fill="red" />
      </Link>
    </Box>
    <Box>
      <Link
        fontSize="sm"
        color="gray.500"
        minWidth="100px"
        mr={2}
        href="https://henrytrianta.vsco.co/"
        title="Photos"
        isExternal
      >
        /photos
      </Link>
      <NextLink href="/newsletter" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Newsletter"
        >
          /newsletter
        </Link>
      </NextLink>
    </Box>
  </Flex>
);

export default Footer;
