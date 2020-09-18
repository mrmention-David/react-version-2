import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';


class App extends Component {
  render(){
    let value=0;
    return (
    <div className="App">
    <ButtonComponent value={value}/>
  </div>
 );
  }
}


export default App;

