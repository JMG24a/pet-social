import React from 'react';
import ReactDOM from 'react-dom';
//graphql
import { ApolloClient, ApolloProvider, InMemoryCache  } from '@apollo/client'
import { APIPhotoGql } from '../env'
//components
import { App } from './router/App'

const client = new ApolloClient({
    uri: APIPhotoGql,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('app')
)

