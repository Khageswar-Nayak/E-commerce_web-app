import React, { useContext } from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import "./Product.css";
import CartContext from "../Store/Cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (product) => {
    // event.preventDefault();
    console.log(product.title);

    cartCtx.addItem({
      ...product,
      quantity: 1,
      id: product.title,

      // price: props.item.price,
    });
  };
  return (
    <Container>
      <Stack style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "fantasy",
            paddingTop: "20px",
            marginBottom: "70px",
          }}
        >
          MUSIC
        </h1>
      </Stack>
      <Row xs={1} md={2} className="g-4 justify-content-center">
        {props.products.map((product, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card
              style={{
                width: "15rem",
                marginLeft: "20px",
                border: "white",
              }}
            >
              <Card.Title style={{ textAlign: "center", marginBottom: "20px" }}>
                {product.title}
              </Card.Title>
              <Card.Img
                className="product-image"
                variant="top"
                src={product.imageUrl}
              />
              <Card.Body className="d-flex justify-content-between">
                <Card.Text style={{ fontSize: "18px" }}>
                  ${product.price}
                </Card.Text>
                <Button
                  variant="info"
                  size="sm"
                  style={{ color: "white", fontWeight: "bold" }}
                  onClick={() => addToCartHandler(product)}
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
