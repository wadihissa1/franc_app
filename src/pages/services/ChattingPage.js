import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  VStack,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '../../components/Footer';

const ContactUsPage = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
    captcha: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contact) newErrors.contact = "Contact number is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    if (!formData.captcha) newErrors.captcha = "Captcha is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setFormData({ name: '', email: '', contact: '', subject: '', message: '', captcha: '' });
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
      <Flex justify="center" align="center" flex="1" px={8} py={16} gap={10} flexWrap="wrap">
        {/* Left Side: SVG Illustration */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="/assets/images/contact.svg"  // Make sure to replace this with a real SVG path
            alt="Contact Illustration"
            maxW="400px"
            w="100%"
          />
        </Box>

        {/* Right Side: Contact Form */}
        <Box
          bg="white"
          p={10}
          borderRadius="2xl"
          boxShadow="0 4px 20px rgba(4, 90, 171, 0.2)"
          border="1px solid"
          borderColor="gray.100"
          maxW="600px"
          w="100%"
        >
          <Heading size="lg" mb={2} textAlign="center">
            Contact Us
          </Heading>
          <Text fontSize="md" color="gray.600" mb={6} textAlign="center">
            Reach out to us anytime!
          </Text>

          {/* Contact Details */}
          <Box bg="gray.50" p={4} borderRadius="md" mb={6} textAlign="center">
            <Text fontWeight="bold">📍 Main Campus of Hadat-Baabda, Building A, Ground Floor</Text>
            <Text>PO Box 40016 Hadat-Baabda - Lebanon</Text>
            <Text>📞 +961 5 92 70 00 | Ext: 1130 – 1131-1133</Text>
            <Text>📞 +961 5 92 70 01</Text>
            <Text>📧 <a href="mailto:ccd@ua.edu.lb" style={{ color: "#045aab" }}>ccd@ua.edu.lb</a></Text>
          </Box>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <Flex gap={4}>
                <FormControl isInvalid={errors.name} flex="1">
                  <FormLabel>Name</FormLabel>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email} flex="1">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex gap={4}>
                <FormControl isInvalid={errors.contact} flex="1">
                  <FormLabel>Contact Number</FormLabel>
                  <Input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" />
                  <FormErrorMessage>{errors.contact}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.subject} flex="1">
                  <FormLabel>Subject</FormLabel>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter the subject" />
                  <FormErrorMessage>{errors.subject}</FormErrorMessage>
                </FormControl>
              </Flex>

              <FormControl isInvalid={errors.message}>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.captcha}>
                <FormLabel>Captcha</FormLabel>
                <Input name="captcha" value={formData.captcha} onChange={handleChange} placeholder="Enter the captcha" />
                <FormErrorMessage>{errors.captcha}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="teal" size="md" w="full">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
};

export default ContactUsPage;
