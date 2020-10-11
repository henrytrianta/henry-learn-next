import { Container, Box, Heading, Flex, Link, Text, useDisclosure } from '@chakra-ui/core';
import NextLink from 'next/link';
import { ScaleFade } from '@chakra-ui/transition';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

// Assets
import Logo from '@/components/Icons/Logo';
import Highlight from './Highlight';

// sementara hardcore
const menus = [
  { menu: 'works', link: '/works' },
  { menu: 'about', link: '/about' },
  { menu: 'contact', link: '/contact' }
];

const LinkComponent = ({ children, link, isOpen, styles, onClose }) => {
  const router = useRouter();
  const pathnow = router.pathname;
  return (
    <NextLink href={link} passHref>
      <Link
        {...styles}
        fontSize={isOpen ? '25px' : ''}
        my={{ base: 4, md: 0 }}
        mx={isOpen ? '0' : '5'}
        display="block"
        onClick={onClose}
        position="relative"
        transition="ease all 0.3s"
        _hover={
          pathnow === link
            ? ''
            : {
                _after: {
                  content: '""',
                  w: '100%',
                  h: '16px',
                  bg: 'palletGoldHard',
                  opacity: '0.3',
                  position: 'absolute',
                  left: '0',
                  bottom: '8px',
                  zIndex: '-1',
                  transition: 'ease all 0.3s'
                }
              }
        }
      >
        {children}
      </Link>
    </NextLink>
  );
};

const MenuItems = ({ link, ...rest }) => {
  const router = useRouter();
  const pathnow = router.pathname;
  return pathnow === link ? (
    <Highlight>
      <LinkComponent {...rest} link={link} />
    </Highlight>
  ) : (
    <LinkComponent {...rest} link={link} />
  );
};

const Header = () => {
  // const [show, setShow] = React.useState();
  // const handleToggle = () => setShow(!show);
  // ganti ke sistem chakra ui :)
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  return (
    <Container maxW="xl">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="transparent"
        color="black"
        py={5}
      >
        <Flex align="center" mr={5} zIndex="10">
          <NextLink href="/" passHref>
            <Link>
              <Heading d="flex" as="h1" size="lg" letterSpacing={'-.1rem'}>
                <Logo width="unset" />
              </Heading>
            </Link>
          </NextLink>
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          zIndex="10"
          onClick={isOpen ? onClose : onOpen}
        >
          <svg fill="black" width="14px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          width={{ base: '100vw', md: 'auto' }}
          height={{ base: isOpen ? '100vh' : '' }}
          alignItems="center"
          justifyContent="center"
          position={isOpen ? 'absolute' : ''}
          flexDirection={isOpen ? 'column' : ''}
          top={isOpen ? '0' : ''}
          left={isOpen ? '0' : ''}
          zIndex="9"
          bg={isOpen ? 'white' : ''}
        >
          {/* Henry note ini harus di improve */}
          <Box display={{ base: 'none', md: 'flex' }}>
            {menus.map((menu, i) => (
              <MenuItems key={i} link={menu.link} isOpen={isOpen} onClose={onClose}>
                {menu.menu}
              </MenuItems>
            ))}
          </Box>
          <ScaleFade initialScale={0.2} timeout={350} in={isOpen}>
            {(styles) =>
              menus.map((menu, i) => (
                <MenuItems
                  key={i}
                  link={menu.link}
                  isOpen={isOpen}
                  styles={styles}
                  onClose={onClose}
                >
                  {menu.menu}
                </MenuItems>
              ))
            }
          </ScaleFade>
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
