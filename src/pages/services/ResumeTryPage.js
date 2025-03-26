import {
    Box,
    Heading,
    Text,
    Button,
    Input,
    VStack,
    Icon,
    FormLabel,
    useToast,
    Image,
    Flex,
  } from '@chakra-ui/react';
  import { useRef, useState } from 'react';
  import { AttachmentIcon } from '@chakra-ui/icons';
  import Footer from '../../components/Footer';
  
  const ResumeTryPage = () => {
    const inputRef = useRef(null);
    const toast = useToast();
    const [fileName, setFileName] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file && file.type !== 'application/pdf') {
        toast({
          title: 'Invalid file type',
          description: 'Only PDF files are allowed.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        e.target.value = null;
        setFileName(null);
      } else {
        setFileName(file.name);
      }
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
            boxShadow="0 4px 20px rgba(4, 90, 171, 0.2)"
            border="1px solid"
            borderColor="gray.100"
            maxW="600px"
            w="100%"
            textAlign="center"
          >
            {/* Friendly avatar */}
            <Image
              src="/assets/images/franc_avatar.jpg"
              alt="Franc Avatar"
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              mx="auto"
              mb={4}
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />

            <Heading size="lg" mb={2}>
              Upload Your Resume
            </Heading>

            <Box
            mt={8}
            px={6}
            py={4}
            textAlign="center"
            bg="gray.50"
            borderRadius="2xl"
            >
            <Heading size="md" mb={4} color="gray.700">
                📌 Resume Tips from Franc
            </Heading>
            <VStack spacing={3} color="gray.600" fontSize="md">
                <Text>✅ Keep it to <b>1 page</b></Text>
                <Text>🎯 Tailor it to <b>each job/internship</b></Text>
                <Text>🧹 Keep it <b>clean and readable</b></Text>
            </VStack>
            </Box>

            
            <Text fontSize="md" color="gray.600" mb={6}>
              Let Franc help you evaluate your CV following international standards!
            </Text>
  
            <VStack spacing={5}>
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
                {fileName ? fileName : 'Select PDF File'}
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
                colorScheme="teal"
                size="md"
                isDisabled={!fileName}
                w="full"
              >
                Submit for Evaluation
              </Button>
  
              {/* Placeholder for feedback */}
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
                {/* API response placeholder */}
                Feedback will appear here after submitting your resume.
              </Box>
            </VStack>
          </Box>
        </Flex>
        <Footer />
      </Box>
    );
  };
  
  export default ResumeTryPage;
  