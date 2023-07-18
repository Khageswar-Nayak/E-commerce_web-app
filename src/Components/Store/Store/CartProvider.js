import React, { useEffect, useState } from "react";
import CartContext from "./Cart-context";
import axios from "axios";
import AuthContext from "../../../auth-context";
import { useContext } from "react";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const ChangesEMail = authCtx.email.replace("@", "").replace(".", "");
  // console.log(ChangesEMail);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/ea25d168492547bc84f22e11f5ce624d/${ChangesEMail}`
        );
        // console.log(response.data);

        setItems((prevItem) => [...prevItem, ...response.data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [ChangesEMail]);

  useEffect(() => {
    let updateAmount = 0;
    let updateQuantity = 0;

    items.forEach((item) => {
      updateAmount += Number(item.price);
      updateQuantity += Number(item.quantity);
    });

    setTotalAmount(updateAmount);
    setQuantity(updateQuantity);
  }, [items]);

  // console.log(items);

  const addItemToCartHandler = async (item) => {
    try {
      const existingItem = items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
          price: existingItem.price + item.price,
        };

        const response = await axios.put(
          `https://crudcrud.com/api/ea25d168492547bc84f22e11f5ce624d/${ChangesEMail}/${existingItem._id}`,
          { ...updatedItem, _id: undefined }
        );
        console.log(response);

        setItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.id === item.id ? updatedItem : cartItem
          )
        );
      } else {
        const postProduct = await axios.post(
          `https://crudcrud.com/api/ea25d168492547bc84f22e11f5ce624d/${ChangesEMail}`,
          item
        );
        setItems((prevItems) => [...prevItems, postProduct.data]);
        console.log(postProduct.data);
      }

      setTotalAmount(totalAmount + item.price);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCartHandler = async (cartItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.id === cartItem.id
    );

    const existingItem = items[existingItemIndex];
    try {
      const response = await axios.delete(
        `https://crudcrud.com/api/56b74cc1aff645888236df7ed7b5602f/${ChangesEMail}/${existingItem._id}`
      );
      const updatedItems = items.filter((item) => item.id !== cartItem.id);

      let updatedAmount =
        totalAmount - existingItem.price * existingItem.quantity;
      let updatedQuantity = quantity - existingItem.quantity;

      setItems(updatedItems);
      setTotalAmount(updatedAmount);
      setQuantity(updatedQuantity);
      console.log(updatedItems);
    } catch (error) {
      console.log(error);
    }

    // let updatedItems;
    // if (existingItem.quantity === 1) {
    //   updatedItems = items.filter((item) => item.id !== id);
    // } else {
    //   const updatedItem = {
    //     ...existingItem,
    //     quantity: existingItem.quantity - 1,
    //     price: existingItem.price - existingItem.price / existingItem.quantity,
    //   };
    //   updatedItems = [...items];
    //   updatedItems[existingItemIndex] = updatedItem;
    // }
    // const updatedTotalAmount = Math.abs(
    //   totalAmount - existingItem.price / existingItem.quantity
    // );
    // setTotalAmount(updatedTotalAmount);
    // setItems(updatedItems);
  };
  const clearCartHandler = async () => {
    try {
      const response = await axios.delete(
        `https://crudcrud.com/api/56b74cc1aff645888236df7ed7b5602f/${ChangesEMail}`
      );
      console.log(response);
      setItems([]);
      setTotalAmount(0);
      alert("Thanks for Purchase");
    } catch (err) {
      console.log(err);
    }
  };

  const cartContext = {
    items: items,
    quantity: quantity,
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
