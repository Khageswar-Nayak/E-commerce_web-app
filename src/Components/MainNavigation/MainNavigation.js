import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import CartContext from "../STORE/Store/Cart-context";

const MainNavigation = (props) => {
  const location = useLocation();
  const [buttonVisible, setButtonVisible] = useState(
    location.pathname === "/store"
  );
  // const [buttonVisible, setButtonVisible] = useState(true);

  const buttonVisibleHandler = () => {
    setButtonVisible(false);
  };

  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });
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
