import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import style from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClickButton={props.onOpenHandler} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
