import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

// import {createStackNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation';

// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

// import {createMaterialTopTabNavigator} from 'react-navigation'

// import {createDrawerNavigator, DrawerItems} from 'react-navigation'

import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Inbox from './screens/Inbox'

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24}/>
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={24}/>
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/3cb84d5de68ece124b637aa22d364736.png')} style={{height: 24, width: 24, tintColor: tintColor}} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24}/>
      )
    }
  },
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  },
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})