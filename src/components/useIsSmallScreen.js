import { useBreakpointValue } from '@chakra-ui/react';

const useIsSmallScreen = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  return isSmallScreen;
};

export default useIsSmallScreen;
