import React, { useContext, useState } from "react";

import Header from "../MainNavigation/Header";
import Product from "../STORE/Products/Product";
import Cart from "../STORE/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
import AuthContext from "../../auth-context";
import axios from "axios";
import CartContext from "./Store/Cart-context";

export const productsArr = [
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
  const [cartItem, setCartItem] = useState([]);
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const modifiedEmail = authCtx.email.replace("@", "").replace(".", "");

  const handleClose = () => {
    setShow(false);
    setCartItem([]);
  };
  const handleShow = async () => {
    setShow(true);
    try {
      const getProduct = await axios.get(
        `https://crudcrud.com/api/ea25d168492547bc84f22e11f5ce624d/${modifiedEmail}`
      );
      setCartItem((prevItems) => [...prevItems, ...getProduct.data]);
      cartCtx.totalAmount = getProduct.data.length;
      // console.log(getProduct);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(cartItem);
  return (
    <CartProvider>
      <MainNavigation handleShow={handleShow} />
      <Cart handleClose={handleClose} show={show} cartItem={cartItem} />
      <Header />
      <Product products={productsArr} />
      <Outlet />
    </CartProvider>
  );
};

export default Store;
