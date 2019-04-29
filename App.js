/**
 * 
 * A boilerplate for a pure tab-based react native application.
 * https://github.com/facebook/react-native
 *
 */
// Import dependencies
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// Import components
import AppNavigator from './app/navigation/AppNavigator'


export default class App extends Component {

  /**
   * 
   * TODO: Async load of resources as in Expo...
   *
   */
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

// Create styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
