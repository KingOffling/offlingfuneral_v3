import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#fb5151" p={4} mt={4}>
      <Flex justify="center" alignItems="center">
        <Text>version 2.11</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
