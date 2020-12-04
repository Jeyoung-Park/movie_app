import React from 'react';
import Potato from "./Potato"; // -> ./는 현재 파일(App.js)와 같은 경로에 있다는 것을 의미
// prop-types 다운로드 -> 내가 전달받은 props가 내가 원하는 props인지 확인
import PropTypes from "prop-types";

class App extends React.Component{
  // state는 object이고 compoenent의 data를 넣을 공간이 있음
  state={
    count:0 //내가 바꿀 데이터
  };
  add=()=>{
    console.log("add");
    // this.state.count=1; -> 이렇게 직접적으로 접근 x
    // setState가 호출될 때마다 react는 새로운 state와 함께 render function 호출
    this.setState(current=>({count:current.count+1})); //아래와 똑같이 동작 
    // this.setState({count:this.state.count+1});
  };
  minus=()=>{
    console.log("minus");
    this.setState(current=>({count:current.count-1}));
    // this.setState({count:this.state.count-1});
  }
  componentDidMount(){
    console.log("ComponenetDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render(){
    console.log("render")
    // return <h1>I am a class {this.state.count}</h1> //sate를 render하기 위해서는 {}에 감싸서 실행, class이기 떄문에 this를 붙여줘야 함.
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
