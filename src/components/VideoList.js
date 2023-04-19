import React from 'react';
import { VStack, Text, Divider } from '@chakra-ui/react';
import useIsSmallScreen from './useIsSmallScreen';

const VideoList = ({ selectedVideo, setSelectedVideo }) => { // Add the selectedVideo prop
  const isSmallScreen = useIsSmallScreen();

  const videoList = [
    {
      title: 'Tragic Discovery',
      src: 'https://storage.googleapis.com/wagdie-wiki/videos/death_001.mp4',
    },
    {
      title: 'Funeral Plans',
      src: 'https://storage.googleapis.com/wagdie-wiki/videos/death_002.mp4',
    },
  ];

  const handleClick = (src) => {
    if (isSmallScreen) {
      window.location.href = src;
    } else {
      setSelectedVideo(src);
    }
  };

  return (
    <VStack alignItems="center" spacing={4} pr={{ base: 0, lg: 8 }}>
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
  );
};

export default VideoList;
