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
  
  constructor(props){
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSection = () => {
    if(this.state.activeIndex == 0) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text>This is the first section</Text>
        </View>
      )
    }
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
          <View style={{paddingTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{ flex: 1, alignItems: 'center'}}>
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

                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                  <Button bordered dark 
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark 
                    style={{ flex: 1, marginLeft: 5, marginRight: 10, justifyContent: 'center', height: 30 }}
                  >
                    <Icon name="ios-settings" style={{marginTop: -6}} />
                  </Button>
                </View>

              </View>
            </View>
            <View style={{ paddingBottom: 10, paddingHorizontal: 10}}>
              <Text style={{ fontWeight: 'bold'}}>BlackRuby Studio</Text>
              <Text>Black | Ruby | Studio</Text>
              <Text>www.blackrubystudio.com</Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', 
              justifyContent: 'space-around', 
              borderTopWidth: 1, 
              borderTopColor: '#eae5e5' 
            }}>
              <Button 
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Icon name="ios-apps"
                  style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button 
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Icon name="ios-list"
                  style={[this.state.activeIndex == 1 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button 
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}
              >
                <Icon name="ios-people" 
                  style={[this.state.activeIndex == 2 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button 
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}
              >
                <Icon name="ios-bookmark"
                  style={[this.state.activeIndex == 3 ? {} : {color: 'grey'}]}
                />
              </Button>
            </View>

            {this.renderSection()}
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
