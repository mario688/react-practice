import Card from "../UI/Card";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.itemCart.item);
  const Elements = items.map((element) => (
    <CartItem
      key={element.id}
      item={{
        id: element.id,
        title: element.title,
        quantity: element.quantity,
        total: element.total,
        price: element.price,
      }}
    />
  ));
  return (
    <>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{Elements}</ul>
      </Card>
    </>
  );
};

export default Cart;
