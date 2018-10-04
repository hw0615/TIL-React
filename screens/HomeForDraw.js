import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header, Left, Right, Icon} from 'native-base';

export default class HomeForDraw extends Component {
  
  static navigationOptions = {
    drawerIcon: ({tintColor}) => {
      <Icon name="home" style={{fontSize: 24, color: tintColor}} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
          </Left>
        </Header>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text> HomeScreen </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
