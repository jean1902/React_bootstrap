import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as ReactDOM from "react-dom/client";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "../css/navbar.css";

export default function navbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg_color">
        <Container>
          <Navbar.Brand href="#home"> Jr Course</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link_navbar" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="link_navbar">Link</Nav.Link>
              <NavDropdown  className="link_navbar" title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Action">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
             <Col xs="auto">
            <Button type="search">Chercher</Button>
          </Col>
          </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
