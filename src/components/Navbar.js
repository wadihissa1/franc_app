'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        position="relative"
        bg={useColorModeValue('whiteAlpha.800', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        backdropFilter="saturate(180%) blur(10px)"
        zIndex="10"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify="center"
      >
        {/* Mobile Toggle Button */}
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
          display={{ base: 'flex', md: 'none' }}
          position="absolute"
          left="1rem"
        />

        {/* Logo */}
        <Link to="/">
          <Image
            src="/assets/logos/ccdlogo.png"
            alt="Logo"
            height="50px"
            objectFit="contain"
          />
        </Link>

        {/* Desktop Nav Items */}
        <Flex display={{ base: 'none', md: 'flex' }} ml={10} flex={1}>
          <DesktopNav />
        </Flex>

        {/* Buttons / Mobile Menu */}
        <Flex
          align="center"
          gap={4}
          position="absolute"
          right="1rem"
        >
          {/* Mobile: Dropdown Menu */}
          <Box display={{ base: 'flex', md: 'none' }}>
            <Button
              as="a"
              href="#"
              size="sm"
              fontWeight="400"
              colorScheme="brand"
            >
              Sign In
            </Button>
          </Box>

          {/* Desktop: Sign In / Sign Up */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={4}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.500'}
              href={'#'}
              _hover={{
                bg: 'brand.600',
              }}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Nav Collapse */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'gray.200');
  const linkHoverColor = useColorModeValue('brand.500', 'brand.300');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Link key={navItem.label} to={navItem.href}>
          <Text
            p={2}
            fontSize={'md'}
            fontWeight={400}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Text>
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Box
      py={2}
      as={Link}
      to={href}
      _hover={{ textDecoration: 'none' }}
    >
      <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
        {label}
      </Text>
    </Box>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Franc',
    href: '/franc',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];

export default Navbar;
