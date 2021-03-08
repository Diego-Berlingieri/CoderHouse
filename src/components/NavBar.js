import CartWidget from './CartWidget';
import logo from '../images/mello-logo.svg';
import './NavBar.css';
import React, { Component } from 'react';
import * as RBS from 'react-bootstrap';


// TO-DO asignar la propiedad TOP a la NavBar. Modificar el margen superior para que el contenido no quede oculto.

class NavBar extends Component {
  render() {
    return (
        <RBS.Navbar bg="dark" expand="sm" variant="dark">
          <RBS.Navbar.Brand href="#home">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            MELLO
          </RBS.Navbar.Brand>
          
          <RBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RBS.Navbar.Collapse id="basic-navbar-nav">
            <RBS.Nav className="mr-auto">
              <RBS.NavDropdown title="Products" id="basic-nav-dropdown">
                <RBS.NavDropdown.Item href="#action/3.1">Woman</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item href="#action/3.2">Man</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item href="#action/3.3">Kids</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Divider />
                <RBS.NavDropdown.Item href="#action/3.4">Sale</RBS.NavDropdown.Item>
              </RBS.NavDropdown>
              <RBS.Nav.Link href="#about">About Us</RBS.Nav.Link>
            </RBS.Nav>
            <CartWidget />
          </RBS.Navbar.Collapse>
        </RBS.Navbar>
    );
  }
}
export default NavBar;