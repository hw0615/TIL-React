import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'

import {createStackNavigator} from 'react-navigation';

// import {createBottomTabNavigator} from 'react-navigation';

// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

// import {createMaterialTopTabNavigator} from 'react-navigation'

// import {createDrawerNavigator, DrawerItems} from 'react-navigation'

import MainScreen from './components/MainScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
});
