import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import twitterLogo from "./media/twitter.png";
import discordLogo from "./media/discord.png";
import etherscanLogo from "./media/etherscan.png";

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

const Navbar = () => {
  const { activate, active, account } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const countdownTimer = () => {
    const targetDate = 1682036400;
    const now = Math.floor(Date.now() / 1000);
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      return null;
    }

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  const [timer, setTimer] = useState(countdownTimer());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(countdownTimer());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [connectWallet]);

  const walletButton = () => {
    if (!active) {
      return (
        <Button
          variant="link"
          fontWeight="bold"
          fontSize={{ base: '4vw', md: '2vw', lg: '1.5vw' }}
          color="#CCCCCC"
          _hover={{ color: "#AAAAAA" }}
          onClick={connectWallet}
        >
          Connect
        </Button>
      );
    } else {
      return (
        <Button
          variant="link"
          fontWeight="bold"
          fontSize={{ base: '4vw', md: '2vw', lg: '1.5vw' }}
          color="#666666"
          _hover={{ color: "#444444" }}
          isDisabled
        >
          Connected: {account.substring(0, 7)}
        </Button>
      );
    }
  };

  return (
    <Box p={4}>
      <Flex justify="space-between" alignItems="center">
        <Box>
          {walletButton()}
        </Box>
        <Box>
          {timer && (
            <Text fontSize={{ base: '3.5vw', md: '2vw', lg: '1.5vw' }}>{timer}</Text>
          )}
        </Box>
        <Flex justifyContent="flex-end">
          <Link href="https://twitter.com/KingOfFling/status/1646537577971761152" isExternal mr={2}>
            <Image
              src={twitterLogo}
              alt="Twitter"
              maxH={{ base: '3vw', md: '2.5vw', lg: '2.5vw' }}
            />
          </Link>
          <Link href="https://discord.gg/wagdie" isExternal mr={2}>
            <Image
              src={discordLogo}
              alt="Discord"
              maxH={{ base: '3vw', md: '2.5vw', lg: '2.5vw' }}
            />
          </Link>
          <Link href="https://etherscan.io/address/0x1E81C9aFcE903a7dA4E7c6a9f21185E2Eb49A1EC" isExternal>
            <Image
              src={etherscanLogo}
              alt="Etherscan"
              maxH={{ base: '3vw', md: '2.5vw', lg: '2.5vw' }}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
