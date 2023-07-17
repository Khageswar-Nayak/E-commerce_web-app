import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../MainNavigation/Header";
import { productsArr } from "../Store";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  // console.log(productsArr);
  // const ProductDetails={}
  const { productId } = useParams();
  const product = productsArr.find((p) => p.title === productId);
  const ProductDetails = {
    ...product,
    review:
      " the useParams hook is a built-in hook provided by React Router. It is used to access and extract parameters from the current URL in a component. It returns an object that contains key-value pairs, where the keys correspond to the dynamic segments defined in the route, and the values are the extracted parameters from the URL.",
  };
  console.log(ProductDetails);

  // Use the productId to fetch the product details or perform any necessary logic

  return (
    <>
      <Header />
      <Container className={classes.stack1} fluid>
        <Row>
          <Col>
            <Row>
              <Col>
                <img
                  src={ProductDetails.imageUrl}
                  alt="color"
                  className={classes.image}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={ProductDetails.imageUrl}
                  alt="color"
                  className={classes.image}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={ProductDetails.imageUrl}
                  alt="color"
                  className={classes.image}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <img
              src={ProductDetails.imageUrl}
              alt="color"
              className={classes.mainImage}
            />
          </Col>
          <Col xs={7}>
            <div className={classes.details}>
              <h3>{ProductDetails.title}</h3>
              <h2>${ProductDetails.price}</h2>
              <span className={classes.span}>Reviews</span>
              <p>
                the useParams hook is a built-in hook provided by React Router.
                It is used to access and extract parameters from the current URL
                in a component. It returns an object that contains key-value
                pairs, where the keys correspond to the dynamic segments defined
                in the route, and the values are the extracted parameters from
                the URL.dynamic routes provide a flexible and efficient way to
                handle varying content and user interactions in web applications
                by allowing the generation of dynamic content based on
                parameters in the URL
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  ); // Replace this with your actual component content
};

export default ProductDetails;
