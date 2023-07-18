import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import { Button, Card } from "react-bootstrap";
import CartContext from "../Store/Cart-context";

const CartItem = (props) => {
  // console.log(props.cartItem);
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    // props.onHide();
  };

  const orderHandler = () => {
    cartCtx.clearCart();
  };

  return (
    <>
      <div className={classes["cart-item"]}>
        <h3 className={classes.item}>ITEM</h3>
        <h3 className={classes["other-item"]}>PRICE</h3>
        <h3 className={classes["other-item"]}>QUANTITY</h3>
      </div>
      {props.cartItem.map((item, index) => (
        <Card
          key={index}
          style={{ borderColor: "white", borderBottom: "1px solid black" }}
        >
          <Card.Body className="d-flex align-items-center">
            <Card.Img
              src={item.imageUrl}
              style={{ height: "76px", width: "88px" }}
            />

            <Card.Title style={{ fontSize: "15px", marginLeft: "10px" }}>
              {item.title}
            </Card.Title>
            <Card.Text style={{ marginLeft: "1rem", marginBottom: "7px" }}>
              {item.price}
            </Card.Text>
            <p
              style={{
                width: "2rem",
                textAlign: "center",
                marginLeft: "5rem",
                border: "2px solid #12bca2",
              }}
            >
              {item.quantity}
            </p>
            <Button
              variant="outline-danger"
              size="sm"
              style={{ marginLeft: "2rem" }}
              onClick={() => cartItemRemoveHandler(item)}
            >
              REMOVE
            </Button>
          </Card.Body>
        </Card>
      ))}

      <h2 className={classes.heading}>
        Total <span> ${cartCtx.totalAmount}</span>
      </h2>
      <Button
        variant="info"
        style={{ marginLeft: "10rem", color: "white", fontWeight: "bold" }}
        onClick={() => {
          orderHandler();
        }}
      >
        PURCHASE
      </Button>
    </>
  );
};

export default CartItem;
