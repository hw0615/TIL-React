import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

export default class MainScreen extends Component {
  
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{paddingLeft: 10}} />,
    title: 'Instagram',
    headerLeft: <Icon name="ios-send-outline" style={{paddingLeft: 10}} />
  }
  render() {
    return (
      <View>
        <Text> MainScreen </Text>
      </View>
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
  },
})

const styles = StyleSheet.create({})
