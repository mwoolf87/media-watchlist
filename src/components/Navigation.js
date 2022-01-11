import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: "#1B4D89" }} collapseOnSelect expand="md" fixed = "top">
      <Container>
        <Navbar.Brand style={{ color: "#F9E45B" }} href="/">Media Watch List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className = "navBarLinks">
            <Nav className="navbar-nav">
              <Link className = "navLinks" to="/medialist">Home</Link>
              <Link className = "navLinks" to="/watchlist">Watchlist</Link>
              <Link className = "navLinks" to="/dashboard">Dashboard</Link>
              <Link className = "navLinks" to="/about">About</Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;