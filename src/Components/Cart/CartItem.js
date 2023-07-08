import React from "react";
import classes from "./CartItem.module.css";
import { Button, Card } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartItem = () => {
  return (
    <>
      <div className={classes["cart-item"]}>
        <h3 className={classes.item}>ITEM</h3>
        <h3 className={classes["other-item"]}>PRICE</h3>
        <h3 className={classes["other-item"]}>QUANTITY</h3>
      </div>
      {cartElements.map((item, index) => (
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
            <input
              value={item.quantity}
              style={{
                width: "2rem",
                textAlign: "center",
                marginLeft: "5rem",
                border: "2px solid #12bca2",
              }}
            />
            <Button
              variant="outline-danger"
              size="sm"
              style={{ marginLeft: "2rem" }}
            >
              REMOVE
            </Button>
          </Card.Body>
        </Card>
      ))}

      <h2 className={classes.heading}>
        Total <span> $0</span>
      </h2>
      <Button
        variant="info"
        style={{ marginLeft: "10rem", color: "white", fontWeight: "bold" }}
      >
        PURCHASE
      </Button>
    </>
  );
};

export default CartItem;
