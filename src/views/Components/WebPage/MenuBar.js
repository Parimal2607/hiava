import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar expand="md" container="md">
        <NavbarBrand href="/">Hiava</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              Templates
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              Pricing
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button className='primary-btn '>Dashboard</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;