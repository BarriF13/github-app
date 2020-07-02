import React, { Component } from 'react'
//when we have a form in react usually : attach a state to the input for example below input is name ="text"

export class Search extends Component {
  state ={
    text:'',
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);

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
      </div>
    )
  }
}

export default Search
