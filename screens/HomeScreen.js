import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class HomeScreen extends Component {
  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title='go back to login screen' onPress={()=>this.props.navigation.goBack()}/>
        <Button title='go back to login screen' onPress={()=>this.props.navigation.popToTop()}/>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
