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
      <Col xs="6" sm="4"></Col>
      <Col md="6" sm="6">
      <label className = "title">Diary Entry
      <br/>
      <textarea className = "textarea" type="text" value={this.state.value}   onChange={this.handleChange} />
      </label>
      <br/>
      <Button color="primary"  value = {this.state.value} onClick = {this.handleSubmit}>submit</Button>      
      </Col>
      <Col xs="6" sm="4"></Col>
      </Row>
      </Container>
      <Container>
      <Row>
      <Col>
      <List className = "list" ans={this.state.ans} /> 
      </Col>
      </Row>
    </Container>
    
      </div>
    );
  }
}

export default User;
