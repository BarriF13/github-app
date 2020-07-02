import React, { Component } from 'react'
import PropTypes from 'prop-types'

//when we have a form in react usually : attach a state to the input for example below input is name ="text"

export class Search extends Component {
  state ={
    text:'',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired

  }
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text); <-- need to pass this value to App for searching the chosen user
    this.props.searchUsers(this.state.text);
    this.setState({text: ''});

  }

  //this gonna update the component state with the form
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit} className="form">
         <input
          type="text"
          name="text"
          placeholder="Search a User"
          value= {this.state.text}
          onChange ={this.onChange}
          />

         <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>

        {this.props.showClear && (
             <button
             className="btn btn-light btn-block"
             //when we click we calling it and sending it up(prop up). so we will catch it in App
              onClick={this.props.clearUsers}
              >Clear search</button>
        )
        }
       
      </div>
    )
  }
}

export default Search
