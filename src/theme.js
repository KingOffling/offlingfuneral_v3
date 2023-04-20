import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Cardo, serif',
    heading: 'Cardo, serif',
  },
  colors: {
    keyword: 'fb5151',
    data: 'white',
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#000000',
        color: '#fb5151',
      },
      '.keyword': {
        color: 'keyword',
      },
      '.data': {
        color: 'data',
      },
    },
  },
});

export default theme;