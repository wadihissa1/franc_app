import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordHash, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://localhost:7022/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          passwordHash,
        }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        console.error('API Error:', data.error); // Log the detailed error response
        throw new Error(data.error || 'Something went wrong');
      }
  
      setIsSignUpSuccessful(true);
      navigate('/OTP-Verification', { state: { email } });
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert(error.message); // Show the error message to the user
    } finally {
      setLoading(false);
    }
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to start using <Text as="span" color={'brand.500'}>Franc</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordHash}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={4}>
              <Button
                size="lg"
                bg={'brand.500'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                isLoading={loading}
                isDisabled={loading}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={4}>
              <Text textAlign={'center'}>
                Already have an account?{' '}
                <Link to="/login">
                  <Text as="span" color={'blue.400'} fontWeight="medium">
                    Log in
                  </Text>
                </Link>
              </Text>
              {/* Show OTP Link only after sign-up is successful */}
              {isSignUpSuccessful && (
                <Text textAlign={'center'} mt={4}>
                  Please verify your email using the OTP sent to{' '}
                  <strong>{email}</strong>.
                </Text>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
