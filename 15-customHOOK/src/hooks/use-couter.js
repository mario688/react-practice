import { useState, useEffect } from "react";
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("run useEffect", forwards);
    const interval = setInterval(() => {
      if (forwards) setCounter((prevCounter) => prevCounter + 1);
      else setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      console.log("wyczyszczono!");
      clearInterval(interval);
    };
  }, [forwards]);

  return counter;
};
export default useCounter;
