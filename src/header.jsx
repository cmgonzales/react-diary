import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav className = "navi">
          
         
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
       
        </Nav>
      </div>
    );
  }
}