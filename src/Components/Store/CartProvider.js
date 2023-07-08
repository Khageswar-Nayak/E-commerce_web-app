import React, { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    console.log(item);
    const existingItem = items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = items.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
            price: cartItem.price + item.price,
          };
        }
        return cartItem;
      });

      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }

    setTotalAmount(totalAmount + item.price);
  };
  const removeItemFromCartHandler = (id) => {};
  const clearCartHandler = () => {};

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
