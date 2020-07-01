import React,{Component} from 'react';

import './App.css';

class App extends Component {
  render(){
    // return (
      // <div className="App">
      //   <h1>Hello Barri</h1>
      //   <h1>Hello my parent is a div</h1>
      // </div>
      // <Fragment>
      //   <h1>I am an h1 in a fragment</h1>
      // </Fragment>
    // );

    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from react with js'));
  }
}

export default App;
