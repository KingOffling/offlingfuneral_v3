import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Center,
  VStack,
  Image,
  Text,
  Divider,
  //Button,
  useBreakpointValue,
  //Grid,
} from '@chakra-ui/react';
import wagdieLogo from './media/wagdie.png';
//import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


/*const GET_CHARACTERS = gql`
{
  characters(where: {location: "4"}, orderBy: timestamp, orderDirection: asc) {
    id
  }
}
`;*/

const MainContent = () => {
  const [selectedVideo, setSelectedVideo] = useState("https://storage.googleapis.com/wagdie-wiki/videos/death_001.mp4");
  const videoRef = useRef();
  //const [showAttendance, setShowAttendance] = useState(false);
  //const [data, setData] = useState([]);


  const videoList = [
    { title: 'Tragic Discovery', src: "https://storage.googleapis.com/wagdie-wiki/videos/death_001.mp4" },
    { title: 'Funeral Plans', src: "https://storage.googleapis.com/wagdie-wiki/videos/death_002.mp4" },
  ];

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [selectedVideo]);

  /*useEffect(() => {
    fetch("https://fateofwagdie.com/api/characters/metadata/${id}")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);*/

  const handleClick = (src) => {
    if (isSmallScreen) {
      window.location.href = src;
    } else {
      setSelectedVideo(src);
    }
  };

  //const [characters, setCharacters] = useState([]);

  /* Fetch characters data from the GraphQL API
  const fetchCharacters = async () => {
    const client = new ApolloClient({
      uri: 'https://api.thegraph.com/subgraphs/name/wagdie/wagdieworld-mainnet',
      cache: new InMemoryCache(),
    });

    try {
      const result = await client.query({ query: GET_CHARACTERS });
      setCharacters(result.data.characters);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const toggleAttendance = () => {
    if (!showAttendance) {
      fetchCharacters();
    }
    setShowAttendance(!showAttendance);
  };
  

  const Attendance = () => {
    return (
      <div>
        <h2>Attendance</h2>
      </div>
    );
  };*/

  return (
    <Center flexDir="column" my={0} w="90%" maxW="1280px" mx="auto">





      <Box width="80%">
        <Image src={wagdieLogo} alt="Wagdie" maxW="60%" mx="auto" />
      </Box>
      <Box width="80%" mt={2}>
        <Text fontSize={{ base: '3.5vw', md: '3vw', lg: '2vw' }} fontWeight="bold" textAlign="center" maxW="60%" mx="auto">
          The Funeral of King{'\u00A0'}Offling
        </Text>
      </Box>
      
      
      
      
      <Box maxW="70%" mt={4}>
  <Box position="relative">
    <Center>
      {!isSmallScreen && (
        <video
          ref={videoRef}
          width="100%"
          controls
          autoPlay
          style={{ border: '2px solid #222222' }}
        >
          <source src={selectedVideo} type="video/mp4" />
          Your browse does not support the video tag.
        </video>
      )}
    </Center>
    <Box position="absolute" left={{ base: '50%', md: '-180px' }} transform={{ base: 'translateX(-50%)', md: 'none' }} top={{ base: isSmallScreen ? '0' : '50%', md: '50%' }}>
      <VStack alignItems="center" spacing={4} pr={{ base: 0, lg: 8 }} paddingBottom={{ base: 8, md: 16 }}>
        {isSmallScreen && <Divider borderColor="gray.200" />}
        {videoList.map((video, index) => (
          <Text
            key={index}
            fontWeight={selectedVideo === video.src ? 'bold' : 'normal'}
            cursor="pointer"
            textAlign="center"
            onClick={() => handleClick(video.src)}
          >
            {video.title}
          </Text>
        ))}
      </VStack>
    </Box>
  </Box>
</Box>

<Box mt={8} mb={10}>

            </Box>
    </Center>
  );
};

export default MainContent;