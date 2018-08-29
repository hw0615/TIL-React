import React, { Component } from 'react'

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-1111-1111',
      id: 0
    },
  }

  state = {
    // 수정을 눌렀을 때 editing 값을 true 로 설정
    // 이 값이 true 일 때, 기존 텍스트 형태로 보여주던 값들을 input 형태로 보여줌
    editing: false,
    // input 의 값은 유동적이니 input 값을 담기 위하여 각 필드를 위한 값도 설정
    name: '',
    phone: '',
  }
  
  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id)
  }

  // editing 값을 반전시키는 함수
  // true -> false, false -> true

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const { 
      name, phone
    } = this.props.info;

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

export default PhoneInfo;