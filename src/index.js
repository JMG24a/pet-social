import React from 'react';
import ReactDOM from 'react-dom';
//graphql
import { ApolloClient, ApolloProvider, InMemoryCache  } from '@apollo/client'
import { APIPhotoGql } from '../env'
//components
import { App } from './router/App'
import { AuthProvider } from './context/context';

const client = new ApolloClient({
    uri: APIPhotoGql,
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

