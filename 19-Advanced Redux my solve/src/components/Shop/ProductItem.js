import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import classes from "./ProductItem.module.css";
import { cartItemAction } from "../../store/cartItems-slice";
const ProductItem = (props) => {
  const { title, price, description, quantity, total } = props;
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      cartItemAction.ADD({
        title: title,
        price: price,
        description: description,
        quantity: quantity,
        total: total,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
