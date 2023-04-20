import React, { useState, useEffect } from 'react';
import { Box, Center, Image, Text, Flex, Button } from '@chakra-ui/react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import wagdieLogo from './media/wagdie.png';
import Attendance from './Attendance';
import Burn from './Burn';
import wagdieAbi from './abis/wagdiesTokenAbi.json'
import Web3 from 'web3';


import intro01 from './story/intro01.png'
import intro02 from './story/intro02.png'
import intro03 from './story/intro03.png'
import intro04 from './story/intro04.png'
import intro05 from './story/intro05.png'
import intro06 from './story/intro06.png'

import dilbert01 from './story/dilbert01.png'
import dilbert02 from './story/dilbert02.png'
import dilbert03 from './story/dilbert03.png'
import dilbert04 from './story/dilbert04.png'
import dilbert05 from './story/dilbert05.png'
import dilbert06 from './story/dilbert06.png'
import dilbert07 from './story/dilbert07.png'
import dilbert08 from './story/dilbert08.png'
import dilbert09 from './story/dilbert09.png'
import dilbert10 from './story/dilbert10.png'

import silence01 from './story/silence01.png'
import silence02 from './story/silence02.png'
import silence03 from './story/silence03.png'

import bard01 from './story/bard01.png'
import bard02 from './story/bard02.png'
import bard03 from './story/bard03.png'
import bard04 from './story/bard04.png'
import bard05 from './story/bard05.png'
import bard06 from './story/bard06.png'
import bard07 from './story/bard07.png'
import bard08 from './story/bard08.png'
import bard09 from './story/bard09.png'
import bard10 from './story/bard10.png'

import crowdrun from './story/crowdrun.png'
import murmur from './story/murmur.png'
import dilbmer from './story/dilbmer.png'
import merlin from './story/merlin.png'
import dilplag from './story/dilplag.png'
import plag from './story/plag.png'

import bell from './story/bell.png'

import song01 from './story/song01.png'
import song02 from './story/song02.png'
import song03 from './story/song03.png'
import song04 from './story/song04.png'
import song05 from './story/song05.png'

import fun01 from './story/fun01.png'
import fun02 from './story/fun02.png'
import fun03 from './story/fun03.png'
import fun04 from './story/fun04.png'



import end from './story/end.png'
import spread from './story/spread.png'




const MainContent = ({ selectedVideo, setSelectedVideo, isSmallScreen }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [burnTime, setBurnTime] = useState(false);
  const [ownsToken, setOwnsToken] = useState(false);

  const address = '0x1E81C9aFcE903a7dA4E7c6a9f21185E2Eb49A1EC';
  const tokenID = 3795;
  const contractAddress = '0x659A4BdaAaCc62d2bd9Cb18225D9C89b5B697A5A';


  /// TRUE TIME IS 20:00 EST -- 1682035200 
  const starttime = 1682035200;
  
  /// TRUE TIME IS 20:20 EST -- 1682036400 
 // const endtime = 1682033760;

  const checkTokenOwnership = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const abi = wagdieAbi;
    const contract = new web3.eth.Contract(abi, contractAddress);
    const owner = await contract.methods.ownerOf(tokenID).call();
    setOwnsToken(owner.toLowerCase() === address.toLowerCase());
  };

  useEffect(() => {
    checkTokenOwnership();
    
    const updateImage = () => {
      const now = Math.floor(Date.now() / 1000);
    
      const timestamps = [
        { time: starttime, image: intro01 },
        { time: starttime + ( 0 * 60) + 15, image: intro02, burnTime: false },
        { time: starttime + ( 0 * 60) + 30, image: intro03, burnTime: false },
        { time: starttime + ( 0 * 60) + 45, image: intro04, burnTime: false },
        { time: starttime + ( 1 * 60) + 0, image: intro05, burnTime: false },
        { time: starttime + ( 1 * 60) + 15, image: intro06, burnTime: false },
        { time: starttime + ( 1 * 60) + 30, image: dilbert01, burnTime: false },
        { time: starttime + ( 1 * 60) + 56, image: dilbert02, burnTime: false },
        { time: starttime + ( 2 * 60) + 4, image: dilbert03, burnTime: false },
        { time: starttime + ( 2 * 60) + 10, image: dilbert04, burnTime: false },
        { time: starttime + ( 2 * 60) + 25, image: dilbert05, burnTime: false },
        { time: starttime + ( 2 * 60) + 28, image: dilbert06, burnTime: false },
        { time: starttime + ( 2 * 60) + 38, image: dilbert07, burnTime: false },
        { time: starttime + ( 2 * 60) + 49, image: dilbert08, burnTime: false },
        { time: starttime + ( 2 * 60) + 55, image: dilbert09, burnTime: false },
        { time: starttime + ( 3 * 60) + 3, image: dilbert10, burnTime: false },
        { time: starttime + ( 3 * 60) + 8, image: silence01, burnTime: false },
        { time: starttime + ( 3 * 60) + 38, image: silence02, burnTime: false },
        { time: starttime + ( 4 * 60) + 8, image: silence03, burnTime: false },
        { time: starttime + ( 4 * 60) + 57, image: bard01, burnTime: false },
        { time: starttime + ( 5 * 60) + 15, image: bard02, burnTime: false },
        { time: starttime + ( 5 * 60) + 31, image: bard03, burnTime: false },
        { time: starttime + ( 5 * 60) + 54, image: bard04, burnTime: false },
        { time: starttime + ( 6 * 60) + 13, image: bard05, burnTime: false },
        { time: starttime + ( 6 * 60) + 30, image: bard06, burnTime: false },
        { time: starttime + ( 6 * 60) + 51, image: bard07, burnTime: false },
        { time: starttime + ( 7 * 60) + 10, image: bard08, burnTime: false },
        { time: starttime + ( 7 * 60) + 27, image: bard09, burnTime: false },
        { time: starttime + ( 7 * 60) + 39, image: bard10, burnTime: false },
        { time: starttime + ( 7 * 60) + 51, image: bard01, burnTime: false },
        { time: starttime + ( 8 * 60) + 3, image: dilbert04, burnTime: false },
        { time: starttime + ( 9 * 60) + 9, image: crowdrun, burnTime: false },
        { time: starttime + ( 9 * 60) + 27, image: dilbert01, burnTime: false },
        { time: starttime + ( 9 * 60) + 43, image: murmur, burnTime: false },
        { time: starttime + ( 9 * 60) + 53, image: dilbmer, burnTime: false },
        { time: starttime + ( 10 * 60) + 0, image: merlin, burnTime: false },
        { time: starttime + ( 11 * 60) + 27, image: dilbert01, burnTime: false },
        { time: starttime + ( 11 * 60) + 36, image: murmur, burnTime: false },
        { time: starttime + ( 11 * 60) + 44, image: dilbert01, burnTime: false },
        { time: starttime + ( 12 * 60) + 13, image: dilbert04, burnTime: false },
        { time: starttime + ( 12 * 60) + 32, image: dilplag, burnTime: false },
        { time: starttime + ( 12 * 60) + 38, image: plag, burnTime: false },
        { time: starttime + ( 13 * 60) + 22, image: dilplag, burnTime: false },
        { time: starttime + ( 13 * 60) + 45, image: plag, burnTime: false },
        { time: starttime + ( 14 * 60) + 8, image: dilbert01, burnTime: false },
        { time: starttime + ( 14 * 60) + 28, image: bard01, burnTime: false },
        { time: starttime + ( 14 * 60) + 39, image: song01, burnTime: false },
        { time: starttime + ( 15 * 60) + 2, image: song02, burnTime: false },
        { time: starttime + ( 15 * 60) + 35, image: song03, burnTime: false },
        { time: starttime + ( 16 * 60) + 35, image: song04, burnTime: false },
        { time: starttime + ( 16 * 60) + 55, image: song05, burnTime: false },
        { time: starttime + ( 17 * 60) + 39, image: dilbert01, burnTime: false },
        { time: starttime + ( 17 * 60) + 49, image: dilbert04, burnTime: false },
        { time: starttime + ( 18 * 60) + 28, image: fun01, burnTime: false },
        { time: starttime + ( 18 * 60) + 48, image: fun02, burnTime: false },
        { time: starttime + ( 19 * 60) + 8, image: fun03, burnTime: false },
        { time: starttime + ( 19 * 60) + 26, image: fun04, burnTime: false },
        { time: starttime + ( 19 * 60) + 48, image: bell, burnTime: false },

        { time: starttime + ( 20 * 60), image: end, burnTime: true },
      ];
    
      let nextTimestamp = timestamps.find(t => now < t.time);
      let currentIndex;
    
      if (nextTimestamp) {
        currentIndex = timestamps.indexOf(nextTimestamp) - 1;
      } else {
        currentIndex = timestamps.length - 1;
      }
    
      if (currentIndex >= 0) {
        if (timestamps[currentIndex].burnTime) {
          setBurnTime(true);
        } else {
          setBurnTime(false);
        }
        setCurrentImage(timestamps[currentIndex].image);
        setShowImage(true);
      }
    
      if (nextTimestamp) {
        const remainingTime = (nextTimestamp.time - now) * 1000;
        console.log('Changing image:', nextTimestamp.image);
        setTimeout(() => {
          setCurrentImage(nextTimestamp.image);
          updateImage();
        }, remainingTime);
      }
    };
    
    updateImage();

    const tokenOwnershipInterval = setInterval(() => {
      checkTokenOwnership();
    }, 1000);

    return () => {
      clearInterval(tokenOwnershipInterval);
    };
  }, []);




  return (
    <Center flexDir="column" my={0} w="90%" maxW="1280px" mx="auto">
      <Box width="80%">
        <Image src={wagdieLogo} alt="Wagdie" maxW="60%" mx="auto" />
      </Box>
      <Box width="80%" mt={2}>
        {ownsToken && <Text fontSize={{ base: '3.5vw', md: '3vw', lg: '2vw' }} fontWeight="bold" textAlign="center" maxW="60%" mx="auto">
          The Funeral of King{'\u00A0'}Offling
        </Text>}
      </Box>

      <Box width="70%">
        {!ownsToken && <Text fontSize={{ base: '3.5vw', md: '3vw', lg: '2vw' }} fontWeight="bold" textAlign="center" maxW="60%" mx="auto">
          The Spread Propogates In Death
        </Text>}
        {!ownsToken && showImage && <Image src={spread} alt="The Funeral of King Offling" mx="auto" mb="4" mt="1" />}
        {ownsToken && currentImage && <Image src={currentImage} alt="The Funeral of King Offling" mx="auto" mb="4" />}
        {!ownsToken && <Text fontSize={{ base: '3.5vw', md: '3vw', lg: '2vw' }} fontWeight="bold" textAlign="center" maxW="60%" mx="auto">
          Over 100 Newly Infected
        </Text>}
        {!ownsToken && <Center><Button colorScheme="red" onClick={() => window.open('http://spores.wagdie.world', '_blank')} size="lg">
        Chronicle The Spread
      </Button></Center>}
      </Box>

      {ownsToken && !currentImage &&
        <Flex justifyContent="center" width="100%" mt={2} position="relative">
          <Box position="absolute" left={0} top="50%">
            <VideoList setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo} isSmallScreen={isSmallScreen} />
          </Box>
          <Center>
            <VideoPlayer selectedVideo={selectedVideo} isSmallScreen={isSmallScreen} />
          </Center>
        </Flex>}

      {ownsToken && !burnTime && <Attendance />}
      {ownsToken && burnTime && <Burn />}

    </Center>
  );
};




export default MainContent;
