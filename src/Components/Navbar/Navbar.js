import React, { useContext } from "react";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import CartContext from "../Store/Cart-context";

const Navbaar = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  return (
    <div>
      <Navbar
        bg="black"
        style={{ borderBottom: "2px solid white" }}
        fixed="top"
      >
        <Container className="d-flex justify-content-center">
          <div style={{ marginRight: "50px" }}>
            <Navbar.Brand style={{ color: "white", fontFamily: "fangsong" }}>
              HOME
            </Navbar.Brand>
          </div>
          <div style={{ marginRight: "50px" }}>
            <Navbar.Brand style={{ color: "white", fontFamily: "fangsong" }}>
              STORE
            </Navbar.Brand>
          </div>

          <Navbar.Brand style={{ color: "white", fontFamily: "fangsong" }}>
            ABOUT
          </Navbar.Brand>
        </Container>
        <Button variant="primary" onClick={() => props.handleShow()}>
          Cart <Badge bg="secondary">{quantity}</Badge>
        </Button>
      </Navbar>
    </div>
  );
};

export default Navbaar;
