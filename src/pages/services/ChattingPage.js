import { Box, Heading, Text, Image, Button, Flex, Icon, VStack, HStack, Circle } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CheckCircleIcon,
  StarIcon,
  TimeIcon,
  ArrowForwardIcon,
  AttachmentIcon,
  ViewIcon,
  ArrowUpIcon,
} from '@chakra-ui/icons';
import Footer from '../../components/Footer';

const ChattingPage = () => (
  <Box
    minH="100vh"
    bgGradient="linear(to-r, white, #ebf8ff)"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    {/* Main Content */}
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      p={{ base: 6, md: 16 }}
      gap={10}
    >
      {/* Right - Image */}
      <Image
        src="/assets/images/chat_service.svg"
        alt="Chatting Service"
        maxW="400px"
        objectFit="contain"
        alignSelf="flex-end"
      />

      {/* Left - Card with Content */}
      <Box
        flex="1"
        maxW={{ base: "100%", md: "60%" }}
        p={8}
        bg="white"
        borderRadius="2xl"
        boxShadow="0 4px 12px rgba(4, 90, 171, 0.2)"
        border="1px solid"
        borderColor="gray.100"
      >
        <Heading size="xl" mb={4}>
          Chatting Service
        </Heading>

        <Text fontSize="lg" mb={6}>
          You can ask Franc any question related to Antonine University or career advising — 
          and he'll do his best to help! Just don’t get mad at him if he doesn’t know something... he’s still learning!
        </Text>

        {/* Icons Row */}
        <HStack spacing={6} mb={6}>
          <VStack spacing={1}>
            <Icon as={CheckCircleIcon} color="green.400" boxSize={6} />
            <Text fontSize="sm">Accurate</Text>
          </VStack>
          <VStack spacing={1}>
            <Icon as={StarIcon} color="yellow.400" boxSize={6} />
            <Text fontSize="sm">Professional</Text>
          </VStack>
          <VStack spacing={1}>
            <Icon as={TimeIcon} color="blue.400" boxSize={6} />
            <Text fontSize="sm">Fast</Text>
          </VStack>
        </HStack>

        <Button
          as={RouterLink}
          to="/chat"
          colorScheme="brand"
          size="md"
        >
          Try It Now
        </Button>
      </Box>
    </Flex>

    {/* How It Works Section */}
    <Box py={16} px={{ base: 6, md: 16 }} bg="white" textAlign="center">
      <Heading size="lg" mb={10}>
        How It Works
      </Heading>

      <HStack
        spacing={10}
        maxW="6xl"
        mx="auto"
        justify="center"
        flexWrap="wrap"
        align="center"
      >
        {/* Step 1 */}
        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={AttachmentIcon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">Start a Chat</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            Send your question to FRANC.
          </Text>
        </VStack>

        <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: 'none', md: 'block' }} />

        {/* Step 2 */}
        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={ArrowUpIcon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">Get a Response</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            Franc will reply in seconds.
          </Text>
        </VStack>

        <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: 'none', md: 'block' }} />

        {/* Step 3 */}
        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={StarIcon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">That’s It!</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            Quick, simple, helpful.
          </Text>
        </VStack>
      </HStack>
    </Box>

    {/* Call to Action Section */}
    <Box
      bg="brand.500"
      color="white"
      py={16}
      px={{ base: 6, md: 16 }}
      textAlign="center"
    >
      <Heading size="lg" mb={4}>
        Need Instant Help About University Life?
      </Heading>
      <Text fontSize="lg" mb={6}>
        Let Franc guide you — he's always ready to answer questions and help you navigate Antonine University!
      </Text>
      <Button
        as={RouterLink}
        to="/chat"
        size="lg"
        colorScheme="whiteAlpha"
        bg="white"
        color="brand.500"
        _hover={{ bg: "gray.100" }}
      >
        Start Chatting Now
      </Button>
    </Box>

    <Footer />
  </Box>
);

export default ChattingPage;
