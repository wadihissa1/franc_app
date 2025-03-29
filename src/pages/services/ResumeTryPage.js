'use client';

import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Input,
  Progress,
  Text,
  VStack,
  useToast,
  Image,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { AttachmentIcon, CheckIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import Footer from '../../components/Footer';

const FrancResumeUpload = () => {
  const inputRef = useRef(null);
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type !== 'application/pdf') {
      toast({
        title: 'Invalid file type',
        description: 'Only PDF files are allowed.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      e.target.value = null;
      setFile(null);
    } else {
      setFile(selected);
    }
  };

  const handleNext = () => {
    if (file) {
      setStep(2);
      setProgress(100);
    } else {
      toast({
        title: 'No file selected',
        description: 'Please upload a PDF before proceeding.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleBack = () => {
    setStep(1);
    setProgress(50);
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, white, #ebf8ff)"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex justify="center" align="center" flex="1" px={4} py={16}>
        <Box
          bg="white"
          p={10}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor="gray.100"
          maxW="600px"
          w="100%"
          textAlign="center"
        >
          <Image
            src="/assets/images/franc_avatar.jpg"
            alt="Franc Avatar"
            boxSize="100px"
            objectFit="cover"
            borderRadius="full"
            mx="auto"
            mb={4}
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          />

          <Heading size="lg" mb={4}>
            Upload Your Resume
          </Heading>

          <Progress value={progress} size="sm" colorScheme="brand" mb={6} borderRadius="md" />

          {step === 1 && (
            <VStack spacing={5}>
              <Box
                px={6}
                py={4}
                textAlign="center"
                bg="gray.50"
                borderRadius="2xl"
                w="full"
              >
                <Heading size="md" mb={4} color="gray.700">
                  📌 Resume Tips from Franc
                </Heading>
                <VStack spacing={2} color="gray.600" fontSize="md">
                  <Text>✅ Keep it to <b>1 page</b></Text>
                  <Text>🎯 Tailor it to <b>each job/internship</b></Text>
                  <Text>🧹 Keep it <b>clean and readable</b></Text>
                </VStack>
              </Box>

              <FormLabel htmlFor="cv-upload" fontWeight="bold" w="100%" textAlign="left">
                PDF File Only
              </FormLabel>

              <Button
                leftIcon={<Icon as={AttachmentIcon} />}
                colorScheme="brand"
                variant="solid"
                onClick={() => inputRef.current.click()}
                w="full"
              >
                {file ? file.name : 'Select PDF File'}
              </Button>

              <Input
                ref={inputRef}
                type="file"
                id="cv-upload"
                accept=".pdf"
                display="none"
                onChange={handleFileChange}
              />

              <Button
                leftIcon={<CheckIcon />}
                colorScheme="green"
                variant="solid"
                w="full"
                onClick={handleNext}
              >
                Submit
              </Button>
            </VStack>
          )}

          {step === 2 && (
            <VStack spacing={6}>
              <Text color="gray.600" fontSize="md">
                Franc will evaluate your resume based on international standards.
              </Text>

              <Box
                bg="gray.50"
                p={5}
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                w="full"
                textAlign="left"
                fontSize="sm"
                color="gray.600"
              >
                ✅ Your resume is now submitted! Franc will review and provide feedback soon.
              </Box>

              <Button
                variant="ghost"
                colorScheme="gray"
                onClick={handleBack}
              >
                Back
              </Button>
            </VStack>
          )}
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
};

export default FrancResumeUpload;
