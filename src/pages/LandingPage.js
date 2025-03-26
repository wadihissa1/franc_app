import { Box, Heading, Text, Button, SimpleGrid, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => (
  <Box>
    {/* Hero Section */}
    <Box textAlign="center" py={20} bg="gray.100">
      <Image 
        src="/assets/images/franc_avatar.jpg" 
        alt="Franc Avatar" 
        boxSize="150px" 
        mx="auto" 
        mb={4} 
        objectFit="cover" 
        borderRadius="full"
      />
      <Heading size="2xl" mb={4}>Welcome to Franc's Platform!</Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        Discover our amazing services and grow with us.
      </Text>
      <Button colorScheme="brand" size="lg">Get Started</Button>
    </Box>

    {/* Services Section */}
    <Box py={20} bg="white">
      <Heading size="xl" textAlign="center" mb={10}>Our Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={10}>
        {/* Service 1 */}
        <Box 
          shadow="md" 
          p={5} 
          borderRadius="md" 
          textAlign="center" 
          bg="gray.50"
          _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
        >
          <Image src="/assets/images/cv_service.svg" boxSize="100px" mx="auto" mb={4} />
          <Heading size="md" mb={2}>Resume Evaluation</Heading>
          <Text color="gray.600" mb={4}>Fast, reliable, CV Evaluation.</Text>
          <Button as={RouterLink} to="/resume-evaluation" colorScheme="brand" size="sm">
            Learn More
          </Button>
        </Box>

        {/* Service 2 */}
        <Box 
          shadow="md" 
          p={5} 
          borderRadius="md" 
          textAlign="center" 
          bg="gray.50"
          _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
        >
          <Image src="/assets/images/chatting_service.svg" boxSize="100px" mx="auto" mb={4} />
          <Heading size="md" mb={2}>Chatting</Heading>
          <Text color="gray.600" mb={4}>Designed for helping you to know your University.</Text>
          <Button as={RouterLink} to="/chatting" colorScheme="brand" size="sm">
            Learn More
          </Button>
        </Box>

        {/* Service 3 */}
        <Box 
          shadow="md" 
          p={5} 
          borderRadius="md" 
          textAlign="center" 
          bg="gray.50"
          _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
        >
          <Image src="/assets/images/cl_service.svg" boxSize="100px" mx="auto" mb={4} />
          <Heading size="md" mb={2}>Cover Letter Evaluation</Heading>
          <Text color="gray.600" mb={4}>Scalable and flexible Cover Letter Evaluation.</Text>
          <Button as={RouterLink} to="/cover-letter-evaluation" colorScheme="brand" size="sm">
            Learn More
          </Button>
        </Box>
      </SimpleGrid>
    </Box>

    {/* Footer */}
    <Footer />
  </Box>
);

export default LandingPage;
