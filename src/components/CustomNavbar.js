import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../App.css';

function CustomNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='navbar-custom fixed-top'
      style={{ borderBottom: '1px solid #bdbbbb' }}
    >
      <Container>
        <Navbar.Brand href='#home'>ALEKHYA BERAM</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/' exact>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to='/skills'>
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to='/projects'>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to='/internship'>
              Internship
            </Nav.Link>
            <Nav.Link as={NavLink} to='/resume'>
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
