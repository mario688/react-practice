import style from "./Error.module.css";
import Button from "../UI/Button";
const Error = (props) => {
  let errorContext = "";
  if (props.type === "tolowage") {
    errorContext = "Age must be positive number";
  } else if (props.type === "emptyinputs") {
    errorContext = "Please enter a valid name and age (nonEpty value)";
  }
  return (
    <div className={style.error}>
      <label>Invalid Input</label>
      {errorContext}
      <Button onClickFunction={props.onButtonIsValid}>Okey</Button>
    </div>
  );
};
export default Error;
