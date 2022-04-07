import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'reset-css'
import {ApolloProvider} from '@apollo/client'
import apolloClient from 'api/apollo_client'
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
