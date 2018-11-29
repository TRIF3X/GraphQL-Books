import React, { Component } from 'react';
import ApolloClient from '../node_modules/apollo-boost';
import { ApolloProvider } from '../node_modules/react-apollo';
import BookList from './components/BookList.js';

//apollo client set up
 const client = new ApolloClient({
   uri: 'http://localhost:9000/graphql' //location of our server
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <div id='main'>
          <h1>Conner's reading list</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
