import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];
  console.log("cssClasses/");
  console.log(cssClasses);
  console.log("cssClasses with join/");
  console.log(cssClasses.join(" "));
  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
