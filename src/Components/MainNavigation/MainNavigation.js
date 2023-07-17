import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import CartContext from "../STORE/Store/Cart-context";
import AuthContext from "../../auth-context";

const MainNavigation = (props) => {
  const location = useLocation();
  const [buttonVisible, setButtonVisible] = useState(
    location.pathname === "/store"
  );
  // const [buttonVisible, setButtonVisible] = useState(true);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const buttonVisibleHandler = () => {
    setButtonVisible(false);
  };

  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };
  return (
    <div>
      <Navbar
        bg="black"
        style={{ borderBottom: "2px solid white", height: "53px" }}
        fixed="top"
      >
        <Container className="d-flex justify-content-center">
          <div style={{ marginRight: "50px" }}>
            <NavLink
              to="/home"
              style={{
                color: "white",
                fontFamily: "fangsong",
                textDecoration: "none",
              }}
              onClick={buttonVisibleHandler}
            >
              HOME
            </NavLink>
            {/* <Navbar.Brand style={{ color: "white", fontFamily: "fangsong" }}>
              HOME
            </Navbar.Brand> */}
          </div>
          <div style={{ marginRight: "50px" }}>
            <NavLink
              to="/store"
              style={{
                color: "white",
                fontFamily: "fangsong",
                textDecoration: "none",
              }}
            >
              STORE
            </NavLink>
          </div>
          <div style={{ marginRight: "50px" }}>
            <NavLink
              to="/about"
              style={{
                color: "white",
                fontFamily: "fangsong",
                textDecoration: "none",
              }}
              onClick={buttonVisibleHandler}
            >
              ABOUT
            </NavLink>
          </div>
          <div style={{ marginRight: "50px" }}>
            <NavLink
              to="/contact"
              style={{
                color: "white",
                fontFamily: "fangsong",
                textDecoration: "none",
              }}
              onClick={buttonVisibleHandler}
            >
              CONTACT US
            </NavLink>
          </div>
          <NavLink
            to="/login"
            style={{
              color: "white",
              fontFamily: "fangsong",
              textDecoration: "none",
            }}
            onClick={buttonVisibleHandler}
          >
            LOGIN
          </NavLink>
          <Button
            variant="black"
            style={{ fontFamily: "fangsong", color: "white" }}
            onClick={logoutHandler}
          >
            LOGOUT
          </Button>
        </Container>
        {buttonVisible && (
          <Button variant="primary" onClick={() => props.handleShow()}>
            Cart <Badge bg="secondary">{quantity}</Badge>
          </Button>
        )}
      </Navbar>
    </div>
  );
};

export default MainNavigation;
