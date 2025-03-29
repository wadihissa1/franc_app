'use client';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function UserProfileEdit() {
  return (
    <Stack spacing={4}>
      <Heading fontSize={{ base: '2xl', sm: '3xl' }} textAlign="center">
        Edit Your Profile
      </Heading>

      <FormControl id="avatar">
        <FormLabel>Profile Picture</FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
              <AvatarBadge
                as={IconButton}
                size="sm"
                rounded="full"
                top="-10px"
                colorScheme="red"
                aria-label="Remove Image"
                icon={<SmallCloseIcon />}
              />
            </Avatar>
          </Center>
          <Center w="full">
            <Button w="full">Change Icon</Button>
          </Center>
        </Stack>
      </FormControl>

      <FormControl id="userName" isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="John Doe" type="text" />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input placeholder="your-email@example.com" type="email" />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Enter new password" type="password" />
      </FormControl>

      <HStack spacing={4} pt={4}>
        <Button
          bg="red.400"
          color="white"
          w="full"
          _hover={{ bg: 'red.500' }}
        >
          Cancel
        </Button>
        <Button
          bg="brand.500"
          color="white"
          w="full"
          _hover={{ bg: 'blue.500' }}
        >
          Save Changes
        </Button>
      </HStack>
    </Stack>
  );
}
