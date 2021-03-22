import * as RBS from 'react-bootstrap';
import '../../styles/NavBar.css';
import logo from '../../assets/mello-logo.svg';
import CartWidget from './CartWidget';
import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (
        <RBS.Navbar bg="dark" expand="sm" variant="dark" fixed="top">
          <RBS.Navbar.Brand href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            MELLO
          </RBS.Navbar.Brand>
          
          <RBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RBS.Navbar.Collapse id="basic-navbar-nav">
            <RBS.Nav className="mr-auto">
              <RBS.NavDropdown title="Products" id="basic-nav-dropdown">
                <RBS.NavDropdown.Item href="/itemList/Woman">Woman</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item href="/itemList/Man">Man</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item href="/itemList/Kids">Kids</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Divider />
                <RBS.NavDropdown.Item href="/itemList">All</RBS.NavDropdown.Item>
              </RBS.NavDropdown>
              <RBS.Nav.Link href="/AboutUs">About Us</RBS.Nav.Link>
            </RBS.Nav>
            <CartWidget />
          </RBS.Navbar.Collapse>
        </RBS.Navbar>
    );
  }
}
export default NavBar;