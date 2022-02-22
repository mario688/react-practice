import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.desc}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
