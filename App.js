import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ShoppingCart from './ShoppingCart'

export default class App extends React.Component{

  render() {
    return (
      <ShoppingCart />
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