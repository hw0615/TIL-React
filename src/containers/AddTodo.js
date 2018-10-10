import React, { Component } from "react";
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo = (text) => {
    // redux store
    this.props.dispatch({ type: 'ADD_TODO', text})
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value = {this.state.text}
          placeholder='Eg. Create New Video'
          style={{borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={{height: 50, backgroundColor: '#eaeaea'}}>
            <Icon name='md-add' size={30} style={{color: '#de9595', padding: 10}}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});