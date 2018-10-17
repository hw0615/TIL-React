import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button  } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent'
import Profile from './ProfileTab'

class HomeTab extends Component {
  
  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" size={30} style={{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left>
            <Button title="d" onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="ios-camera" style={{paddingLeft: 10}}></Icon>
            </Button>
          </Left>
          <Body><Text>Instagram</Text></Body>
          <Right><Icon name="ios-send" style={{paddingRight: 10}}></Icon></Right>
        </Header>

        <Content>
          <View style={{height: 100}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
              <Text style={{fontWeight: 'bold'}}>Stories</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="md-play" style={{fontSize: 14}} />
                <Text style={{fontWeight: 'bold'}}> Watch All</Text>
              </View>
            </View>
            <View style={{flex: 3}}>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                  source={require('../../assets/3cb84d5de68ece124b637aa22d364736.png')} />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    )
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})
