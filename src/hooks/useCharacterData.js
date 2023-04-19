import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const useCharacterData = () => {
  const [characters, setCharacters] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const GET_CHARACTERS = gql`
    {
      characters(where: {location: "4"}, orderBy: timestamp, orderDirection: asc) {
        id
      }
    }
  `;

  useEffect(() => {
    const fetchCharacters = async () => {
      const client = new ApolloClient({
        uri: 'https://api.thegraph.com/subgraphs/name/wagdie/wagdieworld-mainnet',
        cache: new InMemoryCache(),
      });

      try {
        const result = await client.query({ query: GET_CHARACTERS });
        setCharacters(result.data.characters);

        const fetchCharacterJson = async (characterId) => {
          try {
            const response = await fetch(`https://fateofwagdie.com/api/characters/${characterId}`);
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching character JSON data:', error);
          }
        };

        const fetchAllCharactersJson = async () => {
          const newCharacterData = {};
          for (const character of result.data.characters) {
            const data = await fetchCharacterJson(character.id);
            newCharacterData[character.id] = data;
          }
          setCharacterData(newCharacterData);
          setIsDataLoaded(true);
        };

        fetchAllCharactersJson();
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, characterData, isDataLoaded };
};

export default useCharacterData;
