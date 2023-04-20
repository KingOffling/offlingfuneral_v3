import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
    Box,
    Grid,
    GridItem,
    Link,
    Image,
    Button
} from '@chakra-ui/react';

const GET_CHARACTERS = gql`
query GetCharacters {
    characters(where: {location: "4"}, orderBy: infected, orderDirection: desc) {
      id
      owner {
        id
      }
    }
  }
`;

const ShowPortrait = ({ character, characterData }) => {

    if (characterData[character.id].Health === 'Infected') {
        return (
            <Image
                src={`https://storage.googleapis.com/infected-wagdie-images/${character.id}.png`}
            />
        );
    }
    else if (characterData[character.id].isSeared) {
        return (
            <Image
                src={`https://storage.googleapis.com/seared-wagdie-images/${character.id}.png`}
            />
        );
    } else if (characterData[character.id].Health === 'Alive') {
        return (
            <Image
                src={`https://storage.googleapis.com/wagdie-images/${character.id}.png`}
            />
        );
    }
};

const Attendance = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    const [isGridVisible, setIsGridVisible] = useState(false);
    const toggleGridVisibility = () => setIsGridVisible(!isGridVisible);
    const [characterData, setCharacterData] = useState({});

    useEffect(() => {
        const fetchCharacterData = async (character) => {
            const response = await fetch(`https://fateofwagdie.com/api/characters/${character.id}`);
            const metadata = await response.json();
            const attributes = metadata.rawMetadata.attributes.reduce((acc, attr) => {
                acc[attr.trait_type] = attr.value;
                return acc;
            }, {});

            return { ...metadata, ...attributes };
        };

        if (data) {
            const characterPromises = data.characters.map((character) => fetchCharacterData(character));
            Promise.all(characterPromises).then((results) =>
                setCharacterData(
                    results.reduce((accumulator, metadata, index) => {
                        accumulator[data.characters[index].id] = metadata;
                        return accumulator;
                    }, {}),
                ),
            );
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Button onClick={toggleGridVisibility} mb={4} bg="#fb5151" color="white">
                {isGridVisible ? 'Hide Attendees' : 'Show Attendees'}
            </Button>

            {isGridVisible && (
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    {data.characters.map((character) => (
                        <GridItem key={character.id}>
                            <Box borderWidth="1px" borderRadius="lg" padding="4" >
                                {characterData[character.id] && (
                                    <Link href={`http://fateofwagdie.com/characters/${character.id}`}>
                                        <ShowPortrait character={character} characterData={characterData} />
                                        </Link>
                                )}

                                <span className="keyword">ID: </span>
                                <Link href={`http://fateofwagdie.com/characters/${character.id}`}>
                                    <span className="data">{character.id}</span>
                                </Link>
                                <br />
                                {characterData[character.id] && (
                                    <>
                                        <span className="keyword">Name: </span>
                                        <Link href={`http://fateofwagdie.com/characters/${character.id}`}>
                                            <span className="data">
                                                {characterData[character.id].rawMetadata.name}
                                            </span>
                                        </Link>
                                        <br />
                                    </>
                                )}
                                <span className="keyword">Owner: </span>
                                <Link href={`https://opensea.io/${character.owner.id}`}>
                                    <span className="data">{character.owner.id.slice(0, 10)}...</span>
                                </Link>
                                <br />
                                {characterData[character.id] && (
                                    <>
                                        <span className="keyword">Concord:</span>{' '}
                                        <span className="data">
                                            {characterData[character.id].Concord}
                                        </span>{' '}
                                        <br />
                                        <span className="keyword">Health:</span>{' '}
                                        <span className="data">
                                            {characterData[character.id].Health}
                                        </span>
                                    </>
                                )}
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Attendance;