import React, { useRef, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';

const VideoPlayer = ({ selectedVideo }) => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [selectedVideo]);

    return (
        <Box maxW="70%" mt={4} mb={6}>
            <Center>
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
            </Center>
        </Box>
    );


};

export default VideoPlayer;
