import { useReducer } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "BLUR":
      return { value: prevState.value, isTouched: action.isTouched };
    case "INPUTVALUE":
      return { value: action.value, isTouched: action.isTouched };
    default:
      return { value: "", isTouched: false };
  }
};

export default function useInput(valFunction) {
  //const [enteredValue, setEnteredValue] = useState("");
  //const [isTouched, setIsTouched] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    value: "",
    isTouched: false,
  });
  const isValid = valFunction(state.value);

  const blurHandler = () => {
    dispatch({ type: "BLUR", isTouched: true });
    //setIsTouched(true);
  };
  const valueHandler = (e) => {
    dispatch({ type: "INPUTVALUE", value: e.target.value });
    //setEnteredValue(e.target.value);
  };
  const reset = () => {
    dispatch({ type: "RESET", value: "", isTouched: false });
    //setIsTouched(false);
    //setEnteredValue("");
  };
  return {
    value: state.value,
    isTouched: state.isTouched,
    isValid: isValid,
    blurHandler,
    valueHandler,
    reset: reset,
  };
}
