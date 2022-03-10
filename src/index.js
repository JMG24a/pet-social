import React from 'react';
import ReactDOM from 'react-dom';
//graphql
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink  } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { APIPhotoGql } from '../env'
//components
import { App } from './router/App';
import { AuthProvider } from './context';

const httpLink = createHttpLink({
    uri: APIPhotoGql
})

const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

ReactDOM.render(

    <ApolloProvider client={client}>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </ApolloProvider>,
    document.getElementById('app')
)