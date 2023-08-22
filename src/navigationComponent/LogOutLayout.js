import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../routeHelper/ProtectedRouter";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "../navigationComponent/navStyle.css";
import Button from "react-bootstrap/Button";

export const LogOutLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard/home" />;
  }

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
              <Link style={{ fontSize: "20px", marginLeft: "10px" }} to="/createAccount">
                CreateAccount
              </Link>
              <Link
                style={{ fontSize: "20px", marginLeft: "10px" }}
                to="/"
              >
              home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
