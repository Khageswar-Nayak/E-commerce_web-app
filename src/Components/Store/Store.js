import React, { useState } from "react";

import Header from "../MainNavigation/Header";
import Product from "../STORE/Products/Product";
import Cart from "../STORE/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import MainNavigation from "../MainNavigation/MainNavigation";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Store = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CartProvider>
      <MainNavigation handleShow={handleShow} />
      <Cart handleClose={handleClose} show={show} />
      <Header />
      <Product products={productsArr} />
    </CartProvider>
  );
};

export default Store;
