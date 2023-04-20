import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import theme from './theme';

// Import Web3ReactProvider and Web3Provider
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

// Create a getLibrary function for initializing the Web3 instance
function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  const [showAttendance, setShowAttendance] = useState(false);
  const toggleAttendance = () => setShowAttendance(!showAttendance);

  const [selectedVideo, setSelectedVideo] = useState('https://storage.googleapis.com/wagdie-wiki/videos/death_001.mp4');

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Box minW="880px">
        <Router>
          <Navbar />
          <MainContent
            showAttendance={showAttendance}
            toggleAttendance={toggleAttendance}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
            isSmallScreen={isSmallScreen}
          />
          <Footer />
        </Router>
        </Box>
      </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default App;
