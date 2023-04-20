import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import App from './App';
import theme from './theme';
import './Fonts.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

function getLibrary(provider) {
  return new Web3(provider);
}

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/wagdie/wagdieworld-mainnet',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Web3ReactProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
