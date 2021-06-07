import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client/react';
import App from './App';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3010/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  </ApolloProvider>,
  document.getElementById('root')
);


