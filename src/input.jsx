import React, { Component } from 'react';
import { Label, Input, } from 'reactstrap';


class input extends Component {

    
constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
        value: " "
    };
     
}
    
handleChange (e){
    
    console.log( e.target.value)
    this.setState({input: e.target.value})

}

handleSubmit(e){
    
    console.log(this.state.value)
    e.preventDefault();
}

  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <Label for="exampleEmail" className="mr-sm-2">Diary Entry</Label>
      <Input type="textarea"  onChange={this.handleChange} value={this.state.value}  />
      <Input type = "submit" value= "Submit" >Submit</Input>
      </form>
     </div>
    );
  }
}

export default input;
