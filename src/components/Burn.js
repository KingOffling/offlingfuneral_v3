import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Web3 from 'web3';
import burnOfflingAbi from './abis/burnOfflingAbi.json'

const CONTRACT_ADDRESS = '0x1E81C9aFcE903a7dA4E7c6a9f21185E2Eb49A1EC';
const ABI = burnOfflingAbi;

const BurnOffling = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        const contractInstance = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS);
        setContract(contractInstance);
      }
    };

    initWeb3();
  }, []);

  const burnOffling = async () => {
    if (!web3 || !account || !contract) return;

    try {
      await contract.methods.burnOffling().send({ from: account });
      alert('Offling burned successfully');
    } catch (error) {
      console.error('Error burning offling:', error);
    }
  };

  return (
    <div>
      <Button colorScheme="red" onClick={burnOffling} size="lg">
        Burn King Offling
      </Button>
    </div>
  );
};

export default BurnOffling;
