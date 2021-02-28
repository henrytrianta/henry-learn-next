import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Skeleton,
  HStack,
  VStack,
  Link
} from '@chakra-ui/react';
import { MotionBox, MotionContainer, MotionFlex, opacityEffect } from '@/utils/animation';
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import styles from '@/components/CSSModule/ReactClock.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import AnimateOnScreen from '@/components/AnimateOnScreen';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

const LinkProject = {
  fontWeight: '300'
};

const Animation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 10, type: 'spring' }
};

import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { formatISO } from 'date-fns';

const Home2 = () => {
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date(), 1000));

    return () => {
      clearInterval(interval);
    };
  }, []);

  let DateISO = formatISO(new Date());
  // console.log(DateISO);
  let DateISOinUTC = zonedTimeToUtc(DateISO, 'UTC');
  let DateISOinBali = utcToZonedTime(DateISOinUTC, 'SGT');
  let DateNow = new Date();
  const [value, setValue] = useState(new Date());

  return (
    <MotionBox exit={{ opacity: 0 }}>
      <AnimateOnScreen>
        <Container maxW="xl" animate={{ x: '100' }}>
          <Flex
            direction="column"
            justifyContent="space-between"
            height={['auto', '100vh']}
            pt={['120px', '']}
          >
            <Flex alignItems="center" justifyContent={['left', 'center']} grow={[0, 1]}>
              <Heading
                fontSize={['3xl', '5xl']}
                lineHeight={['tight']}
                textAlign={['left', 'center']}
              >
                Next generation <br />
                digital products <br />
                for humans.
              </Heading>
            </Flex>
            <Flex
              direction={['column', 'row']}
              justifyContent="space-between"
              alignItems="center"
              pb="70px"
            >
              <Box w={['full', '1/3']}>
                <Text>
                  We are a digital studio working at the intersection of design, technology & human
                  interaction.
                </Text>
              </Box>
              <HStack
                w={['full', '1/3']}
                py={['20px', '0']}
                spacing="15px"
                justifyContent={['start', 'flex-end']}
              >
                {value && (
                  <Clock
                    // className={styles.clockHome}
                    value={value && value}
                    size={70}
                    renderMinuteMarks={false}
                    hourMarksLength={30}
                    hourMarksWidth={2}
                  />
                )}
                <Flex direction="column">
                  <Heading size="md">Bali</Heading>
                  <Text size="md">hello@henry.pm</Text>
                </Flex>
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <Container maxW="lg" centerContent mt="20">
          <Flex
            justifyContent="space-between"
            alignItems={['left', 'center']}
            w="100%"
            mb="5"
            direction={['column', 'row']}
          >
            <Box>
              <Heading size="md">Minion</Heading>
            </Box>
            <VStack maxWidth="350px" alignItems="left">
              <Box>
                Employee service reimagined. Manage all workplace requests in one single platform.
              </Box>
              <Link>View Case</Link>
            </VStack>
          </Flex>
          <Box overflow="hidden" position="relative">
            <MotionBox
              position="absolute"
              top="0"
              right="0"
              height="100%"
              bgColor="#ff0000"
              // animate={inView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1, type: 'spring' }}
            />
            <MotionBox
            // animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.3, opacity: 0 }}
            >
              <Image
                width="2880px"
                height="1536px"
                fit="cover"
                src="https://www.mad.ac/content/uploads/2019/11/back-hero-miley-2880x1536.jpg"
              />
            </MotionBox>
          </Box>
        </Container>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <Container maxW="lg" centerContent mt="20">
          <VStack maxWidth="350px" alignItems="left">
            <opacityEffect />
          </VStack>
        </Container>
      </AnimateOnScreen>
    </MotionBox>
  );
};

export default Home2;
