import React, { useState } from "react";
import Navbaar from "./Components/Navbar/Navbar";
import Header from "./Components/Navbar/Header";
import Product from "./Components/Products/Product";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

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
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CartProvider>
      <Navbaar handleShow={handleShow} />
      <Cart handleClose={handleClose} show={show} />
      <Header />
      <Product products={productsArr} />
    </CartProvider>
  );
}

export default App;
