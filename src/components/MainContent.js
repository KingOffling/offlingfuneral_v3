import React from 'react';
import { Box, Center, Image, Text, Flex } from '@chakra-ui/react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import wagdieLogo from './media/wagdie.png';
import Attendance from './Attendance';


const MainContent = ({ selectedVideo, setSelectedVideo, isSmallScreen }) => {


  return (
    <Center flexDir="column" my={0} w="90%" maxW="1280px"  mx="auto">
      <Box width="80%">
        <Image src={wagdieLogo} alt="Wagdie" maxW="60%" mx="auto" />
      </Box>
      <Box width="80%" mt={2}>
        <Text fontSize={{ base: '3.5vw', md: '3vw', lg: '2vw' }} fontWeight="bold" textAlign="center" maxW="60%" mx="auto">
          The Funeral of King{'\u00A0'}Offling
        </Text>
      </Box>

      <Flex justifyContent="center" width="100%" mt={2} position="relative">
        <Box position="absolute" left={0} top="50%">
          <VideoList setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo} isSmallScreen={isSmallScreen} />
        </Box>
        <Center>
          <VideoPlayer selectedVideo={selectedVideo} isSmallScreen={isSmallScreen} />
        </Center>
      </Flex>

      <Attendance/>

    </Center>
  );
};




export default MainContent;
