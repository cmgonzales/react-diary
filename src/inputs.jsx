import {Col,Row,Container} from 'reactstrap';
import React from 'react';


const List = props => (
  <Container>
  <Row>
  <Col>

  <div className = "input">
  
    {
      props.ans.map((item, index) => <p key={index}>{item}</p>)
    }
    
  </div>
  </Col>
  </Row>
  </Container>
);

export default List;