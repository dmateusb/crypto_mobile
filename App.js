/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */                                                                                         

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import FlashMessage from "react-native-flash-message";

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'http://192.168.1.10/graphql',
  cache
})

const App = () => {

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.root}>
        <Navigation />     
        <FlashMessage position="top" />             
      </SafeAreaView>  
    </ApolloProvider>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'F9FBFC'
  }
});

export default App;                  