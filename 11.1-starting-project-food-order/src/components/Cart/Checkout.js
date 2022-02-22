import React, { useContext } from "react";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";
export default function Checkout() {
  const cartCtx = useContext(CartContext);
  let formIsValid = true;
  const {
    value: enteredName,
    isTouched: nameIsTouched,
    isValid: nameIsValid,
    blurHandler: nameBlurHandler,
    valueHandler: nameValueHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredStreet,
    isTouched: streetIsTouched,
    isValid: streetIsValid,
    blurHandler: streetBlurHandler,
    valueHandler: streetValueHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPostal,
    isTouched: postalIsTouched,
    isValid: postalIsValid,
    blurHandler: postalBlurHandler,
    valueHandler: postalValueHandler,
    reset: resetPostal,
  } = useInput((value) => value.includes("-"));
  const {
    value: enteredCity,
    isTouched: cityIsTouched,
    isValid: cityIsValid,
    blurHandler: cityBlurHandler,
    valueHandler: cityValueHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  if (!cityIsValid || !postalIsValid || !nameIsValid || !streetIsValid) {
    formIsValid = false;
  }
  const { isSend, error, fetchData } = useHttp({
    url: "https://react-http-2660e-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dataUser: {
        name: enteredName,
        address: enteredStreet,
        postal: enteredPostal,
      },
      order: {
        totalAmount: cartCtx.totalAmount.toFixed(2),
        meals: cartCtx.items,
      },
    }),
  });

  const submitFormHandler = (e) => {
    cartCtx.clearCart();
    e.preventDefault();
    fetchData();
    console.log("Ordered");
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };
  let showForm = cartCtx.items.length > 0;
  return (
    <div>
      {error && error}
      {isSend && <h1>Ordering...</h1>}
      {showForm && (
        <form onSubmit={submitFormHandler}>
          <div>
            <label>Your name</label>
            <input
              value={enteredName}
              onChange={nameValueHandler}
              onBlur={nameBlurHandler}
              type="text"
            ></input>
            {!nameIsValid && nameIsTouched && <p>Name cant be empty</p>}
          </div>
          <div>
            <label>Street</label>
            <input
              value={enteredStreet}
              onChange={streetValueHandler}
              onBlur={streetBlurHandler}
              type="text"
            ></input>
            {!streetIsValid && streetIsTouched && <p>Street cant be empty</p>}
          </div>
          <div>
            <label>Postal Code</label>
            <input
              value={enteredPostal}
              onBlur={postalBlurHandler}
              onChange={postalValueHandler}
              type="text"
            ></input>
            {!postalIsValid && postalIsTouched && <p>invalid Postal</p>}
          </div>
          <div>
            <label>City</label>
            <input
              value={enteredCity}
              onChange={cityValueHandler}
              onBlur={cityBlurHandler}
              type="text"
            ></input>
            {!cityIsValid && cityIsTouched && <p>Invalid City</p>}
          </div>
          <button disabled={!formIsValid}>Conrfirm order</button>
        </form>
      )}
    </div>
  );
}
