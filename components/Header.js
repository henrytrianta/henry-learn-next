import { Container, Box, Heading, Flex, Link, Text, useDisclosure } from '@chakra-ui/core';
import NextLink from 'next/link';
import { ScaleFade } from '@chakra-ui/transition';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

// Assets
import Logo from '@/components/Icons/Logo';

// sementara hardcore
const menus = [
  { menu: 'works', link: '/works' },
  { menu: 'about', link: '/about' },
  { menu: 'contact', link: '/contact' }
];

const MenuItems = ({ children, link, isOpen, styles, onClose }) => {
  const router = useRouter();
  const pathnow = router.pathname;

  // need to improve the sidebar is only closed when the page is loaded

  return (
    <NextLink href={link} passHref>
      <Link
        {...styles}
        fontSize={isOpen ? '25px' : ''}
        mt={{ base: 4, md: 0 }}
        ml={isOpen ? '0' : '6'}
        display="block"
        onClick={onClose}
        _after={
          pathnow === link
            ? {
                content: '""',
                position: 'absolute',
                bottom: '0',
                left: '0',
                height: '2px',
                background: 'palletGoldHard',
                width: '100%'
              }
            : ''
        }
        position="relative"
        _hover={{
          _after: {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '0',
            height: '2px',
            background: 'palletGoldHard',
            width: '100%'
          }
        }}
      >
        {children}
      </Link>
    </NextLink>
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
