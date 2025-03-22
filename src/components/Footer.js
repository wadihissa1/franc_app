import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="brand.500" color="white" py={4} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Fran Platform. All rights reserved. (By Wadih Issa And Rani Hijazi)</Text>
    </Box>
  );
};

export default Footer;
