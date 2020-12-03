import React from 'react';
import Potato from "./Potato"; // -> ./는 현재 파일(App.js)와 같은 경로에 있다는 것을 의미

function Food(props){ // props : Food 태그 안에 들어 있는 것
  return <h1>I like {props.favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food favorite="kimchi"  />
      <Food favorite="kimchi2"  />
      <Food favorite="kimchi3"  />
    </div>
  );
}

export default App;
