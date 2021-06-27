import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigationbar.css";
export default function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">History</Nav.Link>
            <Nav.Link href="">Compose Mail</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
