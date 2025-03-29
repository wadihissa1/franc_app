// src/components/HeroSection.jsx or .js
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
  const HeroSection = () => {
    return (
      <Box py={{ base: 16, md: 28 }} px={6} bg="gray.100">
        <Container maxW="6xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
          >
            {/* Left Side: Text Content */}
            <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
              <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight="110%"
                mb={4}
              >
                Welcome to{' '}
                <Text as="span" color="brand.500">
                  Franc’s Platform
                </Text>
              </Heading>
  
              <Text color="gray.600" fontSize={{ base: 'md', sm: 'lg' }} mb={6}>
                Discover our amazing services and grow with us. Franc is the first AI-powered
                career adviser in Lebanon, launched by Antonine University and the Center for
                Career Development (CCD).
              </Text>
  
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <Button
                  colorScheme="brand"
                  bg="brand.500"
                  rounded="full"
                  px={6}
                  _hover={{ bg: 'brand.600' }}
                >
                  Get Started
                </Button>
                <Button variant="link" colorScheme="gray" size="sm">
                  Learn more
                </Button>
              </Stack>
            </Box>
  
            {/* Right Side: Avatar Image */}
            <Box flex="1" mt={{ base: 10, md: 0 }} textAlign="center">
              <Image
                src="/assets/images/franc_avatar.jpg"
                alt="Franc Avatar"
                boxSize={{ base: '150px', md: '400px' }}
                borderRadius="md"
                mx="auto"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  };
  
  export default HeroSection;
  