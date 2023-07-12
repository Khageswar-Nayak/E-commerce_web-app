import React, { useRef } from "react";
import classes from "./Contact.module.css";

function Contact(props) {
  const nameRef = useRef("");
  const emailIdRef = useRef("");
  const phoneNumberRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      name: nameRef.current.value,
      email: emailIdRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    console.log(obj);
    try {
      const response = await fetch(
        "https://react-http-b76b2-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes["form-container"]}>
      <form onSubmit={submitHandler}>
        <h2 className={classes["form-heading"]}>Contact Us</h2>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
        <label>Email Id:</label>
        <input type="email" ref={emailIdRef} />
        <label>Phone Number:</label>
        <input type="number" ref={phoneNumberRef} />
        <button className={classes["form-button"]}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
