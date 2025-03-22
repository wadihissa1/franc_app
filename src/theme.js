import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e1f0ff',
      100: '#b3d5ff',
      200: '#80b9ff',
      300: '#4d9dff',
      400: '#1a81ff',
      500: '#045aab', // <-- Your main brand color
      600: '#03488c',
      700: '#02366c',
      800: '#01244c',
      900: '#00122c',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
});

export default theme;
