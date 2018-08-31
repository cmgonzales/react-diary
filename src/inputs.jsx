
import React from 'react';

const List = props => (
  <div className = "input">
    {
      props.ans.map((item, index) => <p key={index}>{item}</p>)
    }
    
  </div>
);

export default List;