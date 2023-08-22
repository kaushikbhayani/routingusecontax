import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link, Outlet} from "react-router-dom";
import "../navigationComponent/navStyle.css";
import Button from "react-bootstrap/Button";


const NavHeader = () => {



  return (
    <>
      <Navbar expand="lg" className="Header-style">
        <Container fluid>
          <Navbar.Brand style={{ color: "white" }}>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto w-100  my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link style={{ fontSize: "20px", marginLeft: "10px" }} to="/">
                Home
              </Link>
              <Link style={{ fontSize: "20px", marginLeft: "10px" }} to="/about">
              about
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Button> Log Out</Button>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default NavHeader;
