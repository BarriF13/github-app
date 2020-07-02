import React,{Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';


class App extends Component {
 
  state = {
    users:[],
    loading: false // there is going to be delay white we getting the files so we set loading true while we are grabbing the files as soon as they are ready we turn it to false
  }
  //------------------we can now remove this default of show first 46 users but I am keeping it for my own understanding
      // async componentDidMount(){
        //   this.setState({loading: true}); // as said above
      
        // const res = await axios
        // .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`) // we need this data to become object or state
        // // console.log(res.data);
        // // after we get the data
        // this.setState({users: res.data, loading: false});
        // }
  //---------------------------------------------------------------------------------

        //This will search github users
        searchUsers =async text =>{
          this.setState({loading: true});

          const res = await axios
          .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

          this.setState({users: res.data.items, loading: false});
        };
        // Clear users from state
        clearUsers =() =>this.setState({users:[] , loading: false});

      render(){
      
        return (
          <div className="App">
          <Navbar />
          
          <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false}/>
          <Users loading ={this.state.loading} users ={this.state.users}/>
         
            
          </div>
          
          </div>
    
    );
  }
}

export default App;
