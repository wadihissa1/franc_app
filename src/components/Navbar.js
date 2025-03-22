import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  HStack,
  Text,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      bg="brand.500"
      color="white"
      padding="1rem"
      justify="space-between"
      align="center"
      shadow="md"
    >
      {/* Logo */}
      <Link to="/">
        <Image 
          src="/assets/logos/ccdlogo.png" 
          alt="Logo" 
          height="60px" 
          objectFit="contain" 
        />
      </Link>

      {/* Desktop Links */}
      <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
        <Link to="/">
          <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
            Home
          </Text>
        </Link>
        <Link to="/franc">
          <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
            Franc
          </Text>
        </Link>
        <Link to="/about-us">
          <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
            About Us
          </Text>
        </Link>
        <Link to="/contact-us">
          <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
            Contact Us
          </Text>
        </Link>
      </HStack>

      {/* Mobile Hamburger Menu */}
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        background="transparent"
        _hover={{ bg: 'gray.700' }}
        color="white"
      />

      {/* Drawer for Mobile Links */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white" color="brand.500">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt="4">
              <Link to="/" onClick={onClose}>
                <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
                  Home
                </Text>
              </Link>
              <Link to="/franc" onClick={onClose}>
                <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
                  Franc
                </Text>
              </Link>
              <Link to="/about-us" onClick={onClose}>
                <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
                  About Us
                </Text>
              </Link>
              <Link to="/contact-us" onClick={onClose}>
                <Text fontSize="lg" _hover={{ color: 'brand.300' }}>
                  Contact Us
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
