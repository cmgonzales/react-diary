import React, { Component } from 'react';
import { label, input, } from 'reactstrap';

class User extends Component {

    constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cliked = this.cliked.bind(this);
    
    this.state = {
        value: " "
    };

    this.mainHTML = [<div> main </div>]
     
}
    
handleChange (e){
        this.setState({value: e.target.value})
}

handleSubmit(e){
  
    console.log(this.state.value)
    e.preventDefault();

    
}
 cliked(e){

    console.log("clicked");
  //  e.preventDefault();
}

  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <label>Diary Entry
      <input type="text" value={this.state.value}   onChange={this.handleChange} />
      </label>
      <input type = "submit" value= "Submit" />
      </form>
     <button onClick = {this.cliked}></button>
     </div> 
    );
  }
}

export default User;
