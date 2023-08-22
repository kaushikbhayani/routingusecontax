import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./HeaderStyle.css";
import { Navigate, Outlet, Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
const TopHeader = (prop) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className={prop.className} expand="lg">
        <Container>
          <Navbar.Brand href="#home">  <Link class="nav-link" to={"/dashboard/home"}>
                    Feane
                  </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="user_option header-last-div w-100">
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="Nave-colleps w-100"
            >
              <ul class="navbar-nav nav-mgap">
                <li class="nav-item active">
                  <Link class="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/manuScreen"}>
                    Menu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/detaileScreen"}>
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/bookTableScreen"}>
                    Book Table
                  </Link>
                  <li class="nav-item">
                
                </li>
                </li>
              </ul>

              <div>
                <ul class="navbar-nav mx-auto d-flex">
                  <a class="nav-link" onClick={() => navigate("/splash")}>
                    <PersonIcon />
                  </a>

                  <a class="nav-link" onClick={() => alert("hello")}>
                    <AddShoppingCartIcon />
                  </a>

                  <a class="nav-link" onClick={() => alert("hello")}>
                    <SearchIcon />
                  </a>

                  <motion.button
                    whileTap={{ scale: 0 }}
                    class="nav-link Order-button"
                  >
                    <p className="btm-p">Order Online</p>
                  </motion.button>
                </ul>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default TopHeader;
