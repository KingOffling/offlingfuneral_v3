import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import useCharacterData from '../hooks/useCharacterData';
import CharacterGrid from './CharacterGrid';

const AttendanceButton = () => {
  const { characters } = useCharacterData();
  const [showAttendance, setShowAttendance] = React.useState(false);

  const handleButtonClick = () => {
    setShowAttendance(!showAttendance);
  };

  return (
    <>
      <Button onClick={handleButtonClick} mb={8}>
        {showAttendance ? 'Hide Attendance' : 'Show Attendance'}
      </Button>
      {showAttendance && (
        <Box>
          <CharacterGrid title="Alive" characters={characters} filter="alive" />
          <CharacterGrid title="Infected" characters={characters} filter="infected" />
        </Box>
      )}
    </>
  );
};

export default AttendanceButton;
