import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

export default class CardComponent extends Component {
  render() {

    const images = {
      '1': require('../assets/3cb84d5de68ece124b637aa22d364736.png'),
      '2': require('../assets/3cb84d5de68ece124b637aa22d364736.png'),
      '3': require('../assets/3cb84d5de68ece124b637aa22d364736.png'),
    }

    return (
      <Card>
        <CardItem> 
          <Left>
            <Thumbnail source={require('../assets/3cb84d5de68ece124b637aa22d364736.png')} />
            <Body>
              <Text>BlackRubyStudio</Text>
              <Text note> Oct 5. 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex: 1}} />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{color: 'black'}} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{height: 20}}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight: '900'}}>hw_0615 </Text>
              블랙루비스튜디오 강남구 논현동 일우빌딩 3층 본도시락 퀴노아닭가슴살소시지 퀴노아우삼겹 다이어트닭가슴살 케이준치킨샐러드 된장불로기쌈밥단품 버섯소불고기단품 광양식바싹불고기도시락 자연미인도시락단품 
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({})
