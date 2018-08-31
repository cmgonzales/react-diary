import React, { Component } from 'react';
import { label, textarea, Button, Container, Row,  Col } from 'reactstrap';
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
      <Container>
      <Row>
      <Col xs="6" sm="4"></Col>
      <Col xs="6" sm="4">
      <label className = "title">Diary Entry
      <br/>
      <textarea type="text" value={this.state.value}   onChange={this.handleChange} />
      </label>
      <br/>
      <Button color="primary"  value = {this.state.value} onClick = {this.handleSubmit}>submit</Button>      
      </Col>
      <Col xs="6" sm="4"></Col>
      </Row>
      </Container>
      <List ans={this.state.ans} /> 
      
     </div>
    );
  }
}

export default User;
