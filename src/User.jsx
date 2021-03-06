import React, { Component } from 'react';
import { label, textarea, Button, Container, Row,  Col } from 'reactstrap';
import List from './inputs';

//add if statement == if text != no value create a warning sign

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
      <Col xs="2" sm="3"></Col>
      <Col  md = "6" md="6">
      <label className = "title">Diary Entry
      </label>
      <br/>
      <textarea  type="text" value={this.state.value}   onChange={this.handleChange} />
      <br/>
      <Button color="primary"  value = {this.state.value} onClick = {this.handleSubmit}>submit</Button>      
      </Col>
      <Col xs="2" sm="3"></Col>
      </Row>
      </Container>
      
      <List className = "list" ans={this.state.ans} /> 
      
    
      </div>
    );
  }
}

export default User;
