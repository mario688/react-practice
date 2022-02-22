import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../store/ui-cart-slice";
const CartButton = (props) => {
  const amount = useSelector((state) => state.itemCart.totalAmount);

  const dispatch = useDispatch();
  const toggleButton = () => {
    dispatch(cart.TOGGLECART());
  };

  return (
    <button onClick={toggleButton} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
