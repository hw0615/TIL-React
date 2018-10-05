import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'

import HomeTab from './AppTapNavigator/HomeTab'
import SearchTab from './AppTapNavigator/SearchTab'
import AddMediaTab from './AppTapNavigator/AddMediaTab'
import LikesTab from './AppTapNavigator/LikesTab'
import ProfileTab from './AppTapNavigator/ProfileTab'

// import Icon from 'react-native-vector-icons/Ionicons'
import {Icon} from 'native-base'
import {createMaterialTopTabNavigator} from 'react-navigation'

class MainScreen extends Component {
  
  static navigationOptions = {
    // headerLeft: <Icon name="ios-camera" size={30} style={{paddingLeft: 10}} />,
    // title: 'Instagram',
    // headerRight: <Icon name="ios-send" size={30} style={{paddingRight: 10}} />
    header: null
  }
  render() {
    return (
      <AppTabNavigator />
    )
  }
}

const AppTabNavigator =  createMaterialTopTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  animationEnable: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      height: 65,
      backgroundColor: '#f2f2f2',
      ...Platform.select({
        android:{
          backgroundColor: 'white'
        }
      })
    },
    indicatorStyle: {
      height: 0,
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
})

export default MainScreen

const styles = StyleSheet.create({})
