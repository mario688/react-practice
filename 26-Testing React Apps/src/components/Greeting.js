import { useState } from "react";
import Output from "./Outputs";
const Greeting = (params) => {
  const [changeText, setchangeText] = useState(false);
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <p>Changed!</p>}
      <button
        onClick={() => {
          setchangeText((prevState) => !prevState);
        }}
      >
        change
      </button>
    </div>
  );
};
export default Greeting;
