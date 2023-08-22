import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../routeHelper/ProtectedRouter";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "../navigationComponent/navStyle.css";
import Button from "react-bootstrap/Button";

export const LoginLayout = () => {
  const { user, login } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  const LogOuteNow = () => {
    login(null);
  };

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
              <Link
                style={{ fontSize: "20px", marginLeft: "10px" }}
                to="/dashboard/home"
              >
                Home
              </Link>
              <Link
                style={{ fontSize: "20px", marginLeft: "10px" }}
                to="/dashboard/about"
              >
                AdminPanel
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={() => LogOuteNow()}> Log Out</Button>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
