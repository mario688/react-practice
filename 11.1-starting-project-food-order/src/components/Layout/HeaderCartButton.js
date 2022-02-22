import CartContext from "../../store/cart-context";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;
  const btnClasses = `${style.button} ${btnIsHigh ? style.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    const timer = setBtnIsHigh(true);
    setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items.length]);

  return (
    <button onClick={props.onClickButton} className={btnClasses}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
