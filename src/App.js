import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '연대기',
        phone: '010-1234-5678'
      },
      {
        id: 1,
        name: '기대연',
        phone: '010-5678-1234'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id ++, ...data })
    })
    console.log(data);
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id 
        ? { ...info, ...data } // 새 객체를 만들어석 기존의 값과 전달받은 data 을 덮어씀
        : info // 기존의 값을 그대로 유지
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm 
          onCreate = {this.handleCreate}
        />
        <PhoneInfoList 
          data = {this.state.information} 
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
        />
        {/* {JSON.stringify(information)} */}
      </div>
    );
  }
}

export default App;
