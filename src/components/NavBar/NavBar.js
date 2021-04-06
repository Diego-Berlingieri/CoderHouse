import * as RBS from 'react-bootstrap';
import '../../styles/NavBar.css';
import logo from '../../assets/mello-logo.svg';
import CartWidget from './CartWidget';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
        <RBS.Navbar bg="dark" expand="sm" variant="dark" fixed="top">
          <RBS.Navbar.Brand as={Link} to="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            MELLO
          </RBS.Navbar.Brand>
          
          <RBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RBS.Navbar.Collapse id="basic-navbar-nav">
            <RBS.Nav className="mr-auto">
              <RBS.NavDropdown title="Products" id="basic-nav-dropdown">
                <RBS.NavDropdown.Item as={Link} to="/itemList/YkySayoe2bOPZOJOESaX">Woman</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item as={Link} to="/itemList/GLwUh5g2YwhJWCvQH9S3">Man</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item as={Link} to="/itemList/iLLAVMN3YiEgF3EGNex8">Kids</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Divider />
                <RBS.NavDropdown.Item as={Link} to="/itemList">All</RBS.NavDropdown.Item>
              </RBS.NavDropdown>
              <RBS.Nav.Link as={Link} to="/AboutUs">About Us</RBS.Nav.Link>
            </RBS.Nav>
            <CartWidget />
          </RBS.Navbar.Collapse>
        </RBS.Navbar>
    );
  }
}
export default NavBar;