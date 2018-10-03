import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Go To Home Screen'
            onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
