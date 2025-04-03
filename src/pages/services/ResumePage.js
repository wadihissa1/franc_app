import { useState, useContext } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Icon,
  VStack,
  HStack,
  Circle,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
import {
  CheckCircleIcon,
  StarIcon,
  TimeIcon,
  ArrowForwardIcon,
  AttachmentIcon,
  Search2Icon,
  ViewIcon,
} from "@chakra-ui/icons";
import Footer from "../../components/Footer";

const ResumePage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleTryNow = () => {
    if (isLoggedIn) {
      navigate("/resume-evaluation/try");
    } else {
      onOpen();
    }
  };

  return (
    <Box minH="100vh" bgGradient="linear(to-r, white, #ebf8ff)" display="flex" flexDirection="column" justifyContent="space-between">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" p={{ base: 6, md: 16 }} gap={10}>
        <Image src="/assets/images/cv_eval_service.svg" alt="Resume Evaluation" maxW="400px" objectFit="contain" alignSelf="flex-end" />
        <Box flex="1" maxW={{ base: "100%", md: "60%" }} p={8} bg="white" borderRadius="2xl" boxShadow="0 4px 12px rgba(4, 90, 171, 0.2)" border="1px solid" borderColor="gray.100">
          <Heading size="xl" mb={4}>Resume Evaluation Service</Heading>
          <Text fontSize="lg" mb={6}>Our resume evaluation tool is fully aligned with Antonine University's CCD department standards, which are internationally accepted. Ensure your CV is optimized for academic, internship, and job applications.</Text>
          <HStack spacing={6} mb={6}>
            <VStack spacing={1}><Icon as={CheckCircleIcon} color="green.400" boxSize={6} /><Text fontSize="sm">Accurate</Text></VStack>
            <VStack spacing={1}><Icon as={StarIcon} color="yellow.400" boxSize={6} /><Text fontSize="sm">Professional</Text></VStack>
            <VStack spacing={1}><Icon as={TimeIcon} color="blue.400" boxSize={6} /><Text fontSize="sm">Fast</Text></VStack>
          </HStack>
          <Button colorScheme="brand" size="md" onClick={handleTryNow}>Try It Now</Button>
        </Box>
      </Flex>
      <Box py={16} px={{ base: 6, md: 16 }} textAlign="center" bg="white">
        <Heading size="lg" mb={10}>How It Works</Heading>
        <HStack spacing={10} justify="center" flexWrap="wrap">
          <VStack spacing={4}><Circle size="60px" bg="blue.100" color="blue.700"><Icon as={AttachmentIcon} boxSize={6} /></Circle><Text fontWeight="bold">Upload CV</Text><Text fontSize="sm" color="gray.600" maxW="150px">Upload your current resume to start the evaluation.</Text></VStack>
          <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: "none", md: "block" }} />
          <VStack spacing={4}><Circle size="60px" bg="blue.100" color="blue.700"><Icon as={Search2Icon} boxSize={6} /></Circle><Text fontWeight="bold">Evaluate</Text><Text fontSize="sm" color="gray.600" maxW="150px">System checks CV against professional standards.</Text></VStack>
          <Icon as={ArrowForwardIcon} color="gray.400" boxSize={6} display={{ base: "none", md: "block" }} />
          <VStack spacing={4}><Circle size="60px" bg="blue.100" color="blue.700"><Icon as={ViewIcon} boxSize={6} /></Circle><Text fontWeight="bold">Get Feedback</Text><Text fontSize="sm" color="gray.600" maxW="150px">Receive feedback and improve your resume instantly.</Text></VStack>
        </HStack>
      </Box>
      <Box bg="brand.500" color="white" py={16} px={{ base: 6, md: 16 }} textAlign="center">
        <Heading size="lg" mb={4}>Ready to Improve Your Resume?</Heading>
        <Text fontSize="lg" mb={6}>Take the first step towards a professional CV aligned with international standards.</Text>
        <Button size="lg" colorScheme="whiteAlpha" bg="white" color="brand.500" _hover={{ bg: "gray.100" }} onClick={handleTryNow}>Try Resume Evaluation</Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please Login</ModalHeader>
          <ModalBody><Text>You need to be logged in to benefit from this service.</Text></ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" onClick={() => navigate("/login")}>Go to Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </Box>
  );
};

export default ResumePage;
