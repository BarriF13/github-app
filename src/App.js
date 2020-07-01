import React,{Component} from 'react';

import './App.css';

class App extends Component {

  scopeVar = ()=> 'I am out of scope'
  render(){
    const name = 'Zaghart';
    const foo =() => 'Bar';


    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()}</h1>
        <h1>Hello {foo()}</h1>
        <h1>and:  {this.scopeVar()}</h1>
      </div>
    
    );
    
  }
}

export default App;
