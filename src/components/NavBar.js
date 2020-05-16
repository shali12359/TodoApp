import React, { Component } from 'react';
import '../App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Todos from './Todos';

import { Navbar, Nav} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Link to='/'>
          <Navbar.Brand href="#home">My To-do App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/about">
            <Nav.Link href="#link">About</Nav.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
