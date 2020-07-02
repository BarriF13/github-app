import React,{Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import axios from 'axios';
import './App.css';


class App extends Component {
 
  state = {
    users:[],
    loading: false // there is going to be delay white we getting the files so we set loading true while we are grabbing the files as soon as they are ready we turn it to false
  }
      async componentDidMount(){
          this.setState({loading: true}); // as said above
      
        const res = await axios
        .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`) // we need this data to become object or state
        // console.log(res.data);
        // after we get the data
        this.setState({users: res.data, loading: false});
        }
      render(){
      
        return (
          <div className="App">
          <Navbar />
          <div className="container">
          <Users loading ={this.state.loading} users ={this.state.users}/>
            
          </div>
          
          </div>
    
    );
  }
}

export default App;
