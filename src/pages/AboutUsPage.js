import { Box, Heading, Text, Flex, Image, SimpleGrid, Card, CardBody } from '@chakra-ui/react';
import Footer from '../components/Footer';

const teamMembers = [
  { name: "Fouad Abdallah", role: "CCD Director", image: "/assets/images/Fouad.jpg", description: "Leading the CCD Department and supporting the Franc project." },
  { name: "Elie Najem", role: "CCD Officer", image: "/assets/images/Elie.jpg", description: "Facilitating the collaboration between CCD and CS departments." },
  { name: "Dr. Charbel Gemayel", role: "Head of CS Department", image: "/assets/images/Charbel.jpg", description: "Supervising the development and progress of Franc." },
  { name: "Rani Hijazi", role: "Developer", image: "/assets/images/Rani Hijazi.jpg", description: "One of the developers behind the Franc project." },
  { name: "Wadih Issa", role: "Developer", image: "/assets/images/Wadih Issa.jpg", description: "One of the developers behind the Franc project." }
];

const AboutUsPage = () => {
  return (
    <Box minH="100vh" bgGradient="linear(to-r, #f8f9fa, #ebf8ff)" display="flex" flexDirection="column" justifyContent="space-between">
      
      {/* First Section: Image and Text About the Team */}
      <Flex justify="center" align="center" flex="1" px={{ base: 4, md: 8 }} py={{ base: 8, md: 16 }} gap={{ base: 6, md: 10 }} flexWrap="wrap" backdropFilter="blur(10px)" boxShadow="lg" borderRadius="md" border="1px solid #ddd">
        <Box flex={{ base: "1 1 100%", md: "1" }} display="flex" justifyContent="center">
          <Image
            src="/assets/images/about_us.svg"
            alt="Team Illustration"
            maxW="400px"
            w="100%"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>

        <Box flex={{ base: "1 1 100%", md: "1" }} maxW="800px">
          <Card p={6} boxShadow="2xl" borderRadius="2xl" bg="white">
            <CardBody>
              <Heading size="lg" mb={4} textAlign="left" color="gray.700">
                About the Project Team - Franc
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={4} lineHeight="1.8">
                Franc is a project developed under the collaboration of the CCD Department and the CS Department.
                The CCD department was represented by Mr. Fouad Abdallah (CCD Officer) and Instructor Elie Najem. 
                They worked together with Dr. Charbel Gemayel, the Head of the CS department, who supervised the two alumni students Rani Hijazi and Wadih Issa, the developers of Franc.
              </Text>
            </CardBody>
          </Card>
        </Box>
      </Flex>

      {/* Second Section: Team Members */}
      <Box px={8} py={16} bg="rgba(255, 255, 255, 0.7)" backdropFilter="blur(5px)" borderRadius="lg" boxShadow="lg">
        <Heading size="lg" mb={8} textAlign="center" color="gray.700" textTransform="uppercase" letterSpacing="wide">
          Meet Our Team Members
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={2} spacingY={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              p={0} // Remove padding to ensure full-width image
              boxShadow="2xl"
              borderRadius="lg"
              textAlign="center"
              bg="white"
              w={{ base: "95%", md: "80%", lg: "60%" }} // Increased width

              h="450px" // Increased height
              _hover={{
                transform: "scale(1.05)",
                transition: "0.4s ease-in-out",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
              }}
              overflow="hidden"
              mx="auto" // Center the cards
            >
              <Box w="100%" h="60%" overflow="hidden">
                <Image 
                  src={member.image}
                  alt={member.name}
                  objectFit="cover" // Ensure the image fills the area without distortion
                  objectPosition="top" // Adjust the position to prevent face cropping
                  w="100%"
                  h="100%"
                />
              </Box>
              <CardBody p={4}>
                <Text fontWeight="bold" fontSize="lg" color="gray.700">{member.name}</Text>
                <Text fontSize="md" color="gray.600" fontWeight="medium">{member.role}</Text>
                <Text fontSize="sm" color="gray.500" mt={2}>{member.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AboutUsPage;
