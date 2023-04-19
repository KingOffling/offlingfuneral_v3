import React, { useState, useEffect } from 'react';
import { Button, Checkbox, VStack, Text } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import stakeWagdiesAbi from './abis/stakeWagdiesAbi';
import wagdiesTokenAbi from './abis/wagdiesTokenAbi';

const stakeContractAddress = '0x616d4635cecf94597690cab0fc159c3a8231c904';
const wagdiesTokenAddress = '0x659a4bdaaacc62d2bd9cb18225d9c89b5b697a5a';

const Stake = () => {
  const { library, account } = useWeb3React();
  const [ownedWagdies, setOwnedWagdies] = useState([]);
  const [selectedWagdies, setSelectedWagdies] = useState([]);

  useEffect(() => {
    if (library && account) {
      fetchOwnedWagdies();
    }
  }, [library, account]);

  const fetchOwnedWagdies = async () => {
    if (!library || !account) {
      setOwnedWagdies(wagdies);
      console.log('Owned Wagdies:', wagdies);
      return;
    }

    try {
      const wagdieContract = new Contract(wagdiesTokenAddress, wagdiesTokenAbi, library);
      const balanceOf = await wagdieContract.balanceOf(account);
      const wagdies = [];

      for (let i = 0; i < balanceOf; i++) {
        const tokenId = await wagdieContract.tokenOfOwnerByIndex(account, i);
        wagdies.push(tokenId.toString());
      }

      console.log("Fetched Wagdies:", wagdies);
      setOwnedWagdies(wagdies);
    } catch (error) {
      console.error('Error fetching owned Wagdies:', error);
      setOwnedWagdies([]);
    }
  };

  const toggleWagdie = (wagdieId) => {
    if (selectedWagdies.includes(wagdieId)) {
      setSelectedWagdies(selectedWagdies.filter((id) => id !== wagdieId));
    } else {
      setSelectedWagdies([...selectedWagdies, wagdieId]);
    }
  };

  const stakeWagdies = async () => {
    if (!library || !account) return;

    const stakeWagdieParams = selectedWagdies.map((wagdieId) => {
      return { wagdieId: wagdieId, locationId: 4 };
    });

    const contract = new Contract(stakeContractAddress, stakeWagdiesAbi, library.getSigner());
    try {
      const tx = await contract.stakeWagdies(stakeWagdieParams, { from: account });
      await tx.wait();
      console.log('Stake Wagdies transaction successful');
    } catch (error) {
      console.error('Error while staking Wagdies:', error);
    }
  };

  return (
    <>
      {account ? (
        ownedWagdies.length >  0 ? (
          <VStack spacing={3} marginBottom={3}>
            {ownedWagdies.map((wagdieId) => (
              <Checkbox key={wagdieId} onChange={() => toggleWagdie(wagdieId)}>
                Wagdie ID: {wagdieId}
              </Checkbox>
            ))}
          </VStack>
        ) : (
          <Text marginBottom={3}>No WAGDIE found</Text>
        )
      ) : (
        <Text marginBottom={3}>Wallet Not Connected</Text>
      )}
      <Button onClick={stakeWagdies} colorScheme="teal" size="md" mb={8}>
        Stake Wagdies
      </Button>
    </>
  );
};

export default Stake;

