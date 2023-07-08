import React from "react";
import { Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";

const Cart = (props) => {
  const offcanvasStyles = {
    top: "57px", // Adjust the top value as per your preference
    maxHeight: "calc(100% - 20px)", // Adjust the maxHeight value to fit the desired height
    color: "white",
    width: "30rem",
  };

  return (
    <>
      <Offcanvas
        show={props.show}
        onHide={props.handleClose}
        placement="end"
        scroll="true"
        backdrop={false}
        style={offcanvasStyles}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              color: "black",
              marginLeft: "170px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            CART
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: "black" }}>
          <CartItem />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
