import React, { Component } from 'react'
//when we have a form in react usually : attach a state to the input for example below input is name ="text"

export class Search extends Component {
  state ={
    text:'',
  }
  onChange = (e) => {
    this.setState({text: e.target.value});

  }
  render() {
    return (
      <div>
        
        <form className="form">
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
