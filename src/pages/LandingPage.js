import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  Container,
  Stack,
  Flex,
  Icon
} from '@chakra-ui/react';
import {
  FcDiploma1,
  FcDiploma2,
  FcComments,
} from 'react-icons/fc';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ComingSoonServices from '../components/Comming';


const LandingPage = () => (
  <Box>
    {/* Hero Section */}
    <HeroSection />

    {/* Services Section */}
    <Box py={20} bg="white">
      <Heading size="xl" textAlign="center" mb={10}>
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={10}>
        {/* Resume Evaluation */}
        <Box
          shadow="md"
          p={5}
          borderRadius="lg"
          textAlign="center"
          bg="gray.50"
          _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
        >
          <Flex
            w={16}
            h={16}
            bg="gray.100"
            rounded="full"
            align="center"
            justify="center"
            mx="auto"
            mb={4}
          >
            <Icon as={FcDiploma1} boxSize={8} />
          </Flex>
          <Heading size="md" mb={2}>
            Resume Evaluation
          </Heading>
          <Text color="gray.600" mb={4}>
            Fast, reliable, CV Evaluation.
          </Text>
          <Button as={RouterLink} to="/resume-evaluation" colorScheme="brand" size="sm">
            Learn More
          </Button>
        </Box>

        {/* Chatting */}
        <Box
          shadow="md"
          p={5}
          borderRadius="md"
          textAlign="center"
          bg="gray.50"
          _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
        >
          <Flex
            w={16}
            h={16}
            bg="gray.100"
            rounded="full"
            align="center"
            justify="center"
            mx="auto"
            mb={4}
          >
            <Icon as={FcComments} boxSize={8} />
          </Flex>
          <Heading size="md" mb={2}>
            Chatting
          </Heading>
          <Text color="gray.600" mb={4}>
            Designed for helping you to know your University.
          </Text>
          <Button as={RouterLink} to="/chatting" colorScheme="brand" size="sm">
            Learn More
          </Button>
        </Box>

        {/* Cover Letter Evaluation */}
        <Box
          shadow="md"
          p={5}
          borderRadius="md"
          textAlign="center"
          bg="gray.50"
          _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
        >
          <Flex
            w={16}
            h={16}
            bg="gray.100"
            rounded="full"
            align="center"
            justify="center"
            mx="auto"
            mb={4}
          >
            <Icon as={FcDiploma2} boxSize={8} />
          </Flex>
          <Heading size="md" mb={2}>
            Cover Letter Evaluation
          </Heading>
          <Text color="gray.600" mb={4}>
            Scalable and flexible Cover Letter Evaluation.
          </Text>
          <Button as={RouterLink} to="/cover-letter-evaluation" colorScheme="brand" size="sm">
            Learn More
          </Button>
        </Box>
      </SimpleGrid>
    </Box>


    <ComingSoonServices />

    {/* Footer */}
    <Footer />
  </Box>
);

export default LandingPage;
