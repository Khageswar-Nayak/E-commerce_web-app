import React, { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    // console.log(item);
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

  const removeItemFromCartHandler = (id) => {
    const existingItemIndex = items.findIndex((item) => item.id === id);
    const existingItem = items[existingItemIndex];
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = items.filter((item) => item.id !== id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
        price: existingItem.price - existingItem.price / existingItem.quantity,
      };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    const updatedTotalAmount = Math.abs(
      totalAmount - existingItem.price / existingItem.quantity
    );
    setTotalAmount(updatedTotalAmount);
    setItems(updatedItems);
  };
  const clearCartHandler = () => {
    setItems([]);
    setTotalAmount(0);
    alert("Thanks for Purchase");
  };

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
