import React,{Component} from 'react';

import './App.css';

class App extends Component {

  scopeVar = ()=> 'I am out of scope'
  render(){
    const name = 'Zaghart';
    const foo =() => 'Bar';
    const loading = false;
      // if(loading) {
      //   return <h3>loading..</h3>
      // }
    const showName = true;
    return (
      <div className="App">
        {/* <h1>Hello {name.toUpperCase()}</h1>

        <h1>Hello {foo()}</h1>
        {/*use of ternary operator in jsx*/}
      {/* {loading ? <h3>loading..</h3>: <h1> and:  {this.scopeVar()}</h1> }
        <h1>and:  {this.scopeVar()}</h1> */} 

        { loading ? (
          <h4>loading..</h4>
        ) : (
        // <h1>Hello { showName ? name : null }</h1> or use syntax below && means show the name only if showName = true
        <h1>Hello { showName && name }</h1>
        )}

      </div>
    
    );
    
  }
}

export default App;
