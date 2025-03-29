import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
    FcAbout,
  } from 'react-icons/fc';
  
  const services = [
    {
      heading: 'Mock Interviews',
      description: 'Practice with AI-driven mock interviews tailored to your industry.',
      icon: FcAssistant,
    },
    {
      heading: 'Job Matchmaking',
      description: 'Get matched with opportunities that fit your career goals.',
      icon: FcCollaboration,
    },
    {
      heading: 'Career Coaching',
      description: 'Access personalized coaching based on your resume and interests.',
      icon: FcManager,
    },
    {
      heading: 'AI Cover Letter Builder',
      description: 'Generate job-specific cover letters in seconds.',
      icon: FcDonate,
    },
    {
      heading: 'Personality Insights',
      description: 'Understand your strengths better through AI-powered analysis.',
      icon: FcAbout,
    },
  ];
  
  const ServiceCard = ({ heading, description, icon }) => (
    <Box
      minW={{ base: '100%', sm: '47%', md: '275px' }}
      flex="1"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={useColorModeValue('white', 'gray.800')}
      shadow="md"
    >
      <Stack align={'start'} spacing={3}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          <Icon as={icon} w={10} h={10} />
        </Flex>
        <Box>
          <Heading size="md">{heading}</Heading>
          <Text mt={2} fontSize={'sm'} color="gray.600">
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'brand'} size={'sm'} isDisabled>
          Coming Soon
        </Button>
      </Stack>
    </Box>
  );
  
  const ComingSoonServices = () => (
    <Box py={20} px={6} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Coming Soon on Franc
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          We're cooking up powerful tools to make your career journey even easier.
        </Text>
      </Stack>
  
      <Container maxW={'100%'}>
        <Flex flexWrap="wrap" justify="flex-start" gap={6} w="100%">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
  
  export default ComingSoonServices;
  