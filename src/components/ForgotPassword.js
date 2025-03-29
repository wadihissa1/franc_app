'use client';

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text fontSize={{ base: 'sm', sm: 'md' }} color={'gray.600'}>
          You’ll get an email with a reset link
        </Text>
        <FormControl id="email" isRequired>
          <Input placeholder="your-email@example.com" type="email" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'brand.500'}
            color={'white'}
            _hover={{ bg: 'blue.500' }}
          >
            Send Reset Link
          </Button>
          <Text fontSize="sm" textAlign="center">
            Remembered your password?{' '}
            <Link to="/login">
              <Text as="span" color="blue.400" fontWeight="medium">
                Log in
              </Text>
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ForgotPassword;
