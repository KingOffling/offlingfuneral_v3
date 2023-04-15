import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Cardo, serif',
    heading: 'Cardo, serif',
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#000000',
        color: '#fb5151',
      },
    },
  },
});

export default theme;
