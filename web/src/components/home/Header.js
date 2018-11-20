import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility
}) => (
    <Navbar fluid={true}>
      <Navbar.Collapse>
        <Nav pullRight>
          <div className="separator"></div>
          <NavItem><Link to="/login">Log out</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );


export default connect()(Header);