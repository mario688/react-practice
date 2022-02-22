import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemAction } from "../../store/cartItems-slice";
const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(cartItemAction.INCREASE(id));
  };
  const decreaseHandler = () => {
    dispatch(cartItemAction.DECREASE(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
