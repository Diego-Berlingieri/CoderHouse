import * as RBS from 'react-bootstrap';
import '../../styles/NavBar.css';
import logo from '../../assets/mello-logo.svg';
import CartWidget from './CartWidget';
import React from 'react';
import {Link} from 'react-router-dom';

import {useContext} from 'react';
import {LangContext} from '../Context/LangContext';

function NavBar() {
  const {lang, updateLanguageById} = useContext(LangContext);

  
    return (
        <RBS.Navbar bg="dark" expand="sm" variant="dark" fixed="top">
          <RBS.Navbar.Brand as={Link} to="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            MELLO
          </RBS.Navbar.Brand>
          
          <RBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RBS.Navbar.Collapse id="basic-navbar-nav">
            <RBS.Nav className="mr-auto">
              <RBS.NavDropdown title={lang.products} id="basic-nav-dropdown">
                <RBS.NavDropdown.Item as={Link} to="/itemList/YkySayoe2bOPZOJOESaX">{lang.woman}</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item as={Link} to="/itemList/GLwUh5g2YwhJWCvQH9S3">{lang.man}</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item as={Link} to="/itemList/iLLAVMN3YiEgF3EGNex8">{lang.kids}</RBS.NavDropdown.Item>
                <RBS.NavDropdown.Divider />
                <RBS.NavDropdown.Item as={Link} to="/itemList">{lang.all}</RBS.NavDropdown.Item>
              </RBS.NavDropdown>
              <RBS.Nav.Link as={Link} to="/AboutUs">{lang.aboutus}</RBS.Nav.Link>
            </RBS.Nav>

            
            <RBS.NavDropdown className="navbar-drop-lang" 
              title={
              <i className="fas fa-globe">
                <div className="lang-tag">{lang.lang}</div>
              </i>
              }>
                <RBS.NavDropdown.Item 
                  onClick={(e) => updateLanguageById('en')}>English
                </RBS.NavDropdown.Item>
                <RBS.NavDropdown.Item 
                  onClick={(e) => updateLanguageById('es')}>Español
                </RBS.NavDropdown.Item>
            </RBS.NavDropdown>
            <CartWidget />
          </RBS.Navbar.Collapse>
        </RBS.Navbar>
    );
  
}
export default  NavBar;