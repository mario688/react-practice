import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (prevState, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: prevState.isTouched };
    case "BLUR":
      return { isTouched: true, value: prevState.value };
    case "RESET":
      return { isTouched: false, value: "" };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };
  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });
    //setIsTouched(true);
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    //setEnteredValue("");
    // setIsTouched(false);
  };
  return {
    value: inputState.value,
    valueIsValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    valueBlurHandler: valueBlurHandler,
    reset,
  };
};
export default useInput;
