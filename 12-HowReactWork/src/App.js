import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/DEMO/DemoOutput";

function App() {
  const [showPar, setShowPar] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowPar((prevState) => !prevState);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
    console.log("ALLOWED");
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPar} />
      <Button onClick={toggleParagraphHandler}>SHOW</Button>
      <Button onClick={allowToggleHandler}>ALLOWED</Button>
    </div>
  );
}

export default App;
