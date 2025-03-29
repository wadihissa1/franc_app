'use client';

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/">
    <chakra.img src="/assets/logos/ccdlogo.png" alt="Franc Platform Logo" height="60px" />
  </Link>
);

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={6}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/franc">Franc</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            © {new Date().getFullYear()} Franc Platform. All rights reserved.
            <br />
            Built by <strong>Wadih Issa</strong> & <strong>Rani Hijazi</strong>
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'LinkedIn'} href="https://linkedin.com/">
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'GitHub'} href="https://github.com/">
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Instagram'} href="https://instagram.com/">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
