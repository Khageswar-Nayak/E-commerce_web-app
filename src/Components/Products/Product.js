import React from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
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
                <Button variant="info" size="sm">
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
