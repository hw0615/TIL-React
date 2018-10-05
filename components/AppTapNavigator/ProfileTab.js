import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class ProfileTab extends Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} />
    )
  }
  
  render() {
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Header>
          <Left><Icon name="md-person-add" style={{paddingLeft: 10}}></Icon></Left>
          <Body><Text>Instagram</Text></Body>
          <Right><EntypoIcon name="back-in-time" style={{paddingRight: 10, fontSize: 32}}></EntypoIcon></Right>
        </Header>
        <Content>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{ flex: 1}}>
                <Image source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} style={{width: 75, height: 75, borderRadius: 37.5}} />
              </View>
              <View style={{ flex: 3}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>202</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>followers</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>following</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Button bordered dark 
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 35 }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark 
                    style={{ flex: 1, marginLeft: 5, marginRight: 10, justifyContent: 'center', height: 35 }}
                  >
                    <Icon name="ios-settings" />
                  </Button>
                </View>

              </View>
            </View>
          </View>
        </Content>
      </Container>
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
