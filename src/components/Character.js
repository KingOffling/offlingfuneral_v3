import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Character = ({ character }) => {
  const getImageUrl = (character) => {
    return `https://storage.googleapis.com/wagdie-images/${character.id}.png`;
  };

  return (
    <Box key={character.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontSize="md" fontWeight="bold">
        {character.id}
      </Text>
      <Text fontSize="sm">Status: {character.status}</Text>
      <img src={getImageUrl(character)} alt={character.name} />
    </Box>
  );
};

export default Character;
