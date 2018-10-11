import React, { Component } from 'react';

// 함수형 컴포넌트
// const SearchBar = () => {
//     return <input />
// }

// 클래스 기반 컴포넌트
class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state= { term: '' };
    }
    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}/>
            </div>
        );
    }

}

export default SearchBar