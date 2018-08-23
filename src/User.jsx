import React, { Component } from 'react';
import { label, input, } from 'reactstrap';
import List from './inputs';

class User extends Component {

    constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    
    this.state = {
        value: " ",
        ans:[]
    };
    
}
    
handleChange (e){
        this.setState({value: e.target.value})
}

handleSubmit(e){

   e.preventDefault();
   this.setState({
      value: '',
      ans: [...this.state.ans, this.state.value]
    });
}


  render() {
    return (
      <div>
    
      <label className = "title">Diary Entry
      <input type="text" value={this.state.value}   onChange={this.handleChange} />
      </label>
      <button value = {this.state.value} onClick = {this.handleSubmit}>submit</button>      
      <List ans={this.state.ans} /> 
     </div>
    );
  }
}

export default User;
