
import React from 'react';

const List = props => (
  <ul>
    {
      props.ans.map((item, index) => <p key={index}>{item}</p>)
    }
  </ul>
);

export default List;