import React, { Component } from 'react';
import { label, input, } from 'reactstrap';

class User extends Component {

    constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    
    this.state = {ans: [],
        value: " "
    };
    
}
    
handleChange (e){
        this.setState({value: e.target.value})
}

handleSubmit(e){
  this.setState({ans: e.target.value})
   console.log(this.state.ans)
  
}


  render() {
    return (
      <div>
    
      <label>Diary Entry
      <input type="text" value={this.state.value}   onChange={this.handleChange} />
      </label>
      <button value = {this.state.value} onClick = {this.handleSubmit}>submit</button>
      <div>
      <ul>
      {this.state.ans}
      </ul>
      </div>      
     
     </div>
    );
  }
}

export default User;
