import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ShoppingCart from './ShoppingCart'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component{

  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})