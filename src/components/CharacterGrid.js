import React from 'react';
import { Grid, Text } from '@chakra-ui/react';
import Character from './Character';

const CharacterGrid = ({ title, characters, characterData }) => {
    return (
      <>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          {title}
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={8}>
        {characters.map((character) => (
  <Character key={character.id} character={characterData[character.id]} />
))}
        </Grid>
      </>
    );
  };
  

export default CharacterGrid;
