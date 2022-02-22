import { useState } from "react";

const useInput = (validFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let isValid = validFunction(enteredValue);
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const blurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isTouched: isTouched,
    isValid: isValid,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
