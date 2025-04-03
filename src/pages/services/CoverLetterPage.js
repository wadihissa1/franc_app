import { Box, Heading, Text, Image, Button, Flex, Icon, VStack, HStack, Circle, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  CheckCircleIcon,
  StarIcon,
  TimeIcon,
  ArrowForwardIcon,
  AttachmentIcon,
  Search2Icon,
  ViewIcon,
  ArrowUpIcon,
} from '@chakra-ui/icons';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import { AuthContext } from "../../components/AuthContext"; // Assuming you have the AuthContext in this path

const CoverLetterPage = () => {
  const { isLoggedIn } = useContext(AuthContext);  // Get the login state from context
  const { isOpen, onOpen, onClose } = useDisclosure();  // For handling the modal
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    if (!isLoggedIn) {
      onOpen();  // Open the modal if not logged in
    } else {
      navigate("/cover-letter-evaluation/try");  // Redirect to the cover letter evaluation page if logged in
    }
  };

  const handleLoginClick = () => {
    navigate("/login");  // Navigate to the login page
  };

  return (
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
          src="/assets/images/cl_eval_service.svg"
          alt="Resume Evaluation"
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
            Cover Letter Evaluation Service
          </Heading>

          <Text fontSize="lg" mb={6}>
            Our cover letter evaluation tool is fully aligned with Antonine University's CCD department standards,
            which are internationally accepted. Ensure your CV is optimized for academic, internship, and job applications.
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
            onClick={handleTryNowClick}  // Use this to handle click event
            colorScheme="brand"
            size="md"
          >
            Try It Now
          </Button>
        </Box>
      </Flex>

    {/* How It Works Section */}
    <Box py={16} px={{ base: 6, md: 16 }} textAlign="center" bg="white">
      <Heading size="lg" mb={10}>
        How It Works
      </Heading>

      <HStack spacing={10} justify="center" flexWrap="wrap">
        {/* Step 1 */}
        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={AttachmentIcon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">Upload CV</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            Upload your current cover letter.
          </Text>
        </VStack>

        {/* Arrow */}
        <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: 'none', md: 'block' }} />

        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={ArrowUpIcon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">Upload Job AD</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            Upload the Job Add to start the evaluation.
          </Text>
        </VStack>

        <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: 'none', md: 'block' }} />

        {/* Step 2 */}
        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={Search2Icon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">Evaluate</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            System checks Cover Letter against the Job AD and professional standards.
          </Text>
        </VStack>

        {/* Arrow */}
        <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: 'none', md: 'block' }} />

        {/* Step 3 */}
        <VStack spacing={4}>
          <Circle size="60px" bg="blue.100" color="blue.700">
            <Icon as={ViewIcon} boxSize={6} />
          </Circle>
          <Text fontWeight="bold">Get Feedback</Text>
          <Text fontSize="sm" color="gray.600" maxW="150px">
            Receive feedback and improve your cover letter instantly.
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
          Ready to Improve Your Cover Letter?
        </Heading>
        <Text fontSize="lg" mb={6}>
          Take the first step towards a professional Cover Letter aligned with international standards.
        </Text>
        <Button
          onClick={handleTryNowClick}  // Same button handler for the CTA button
          size="lg"
          colorScheme="whiteAlpha"
          bg="white"
          color="brand.500"
          _hover={{ bg: "gray.100" }}
        >
          Try Cover Letter Evaluation
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Login Required</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text>Please login to benefit from the service.</Text>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" onClick={handleLoginClick}>Go to Login</Button>
      <Button variant="ghost" onClick={onClose}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>


      <Footer />
    </Box>
  );
};

export default CoverLetterPage;
