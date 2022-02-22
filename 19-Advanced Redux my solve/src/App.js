import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
let isInitial = true;
function App() {
  const isShow = useSelector((state) => state.cart.showCart);
  const cartData = useSelector((state) => state.itemCart);
  const notificationStatus = useSelector((state) => state.cart.Notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartData.changed) {
      dispatch(sendCartData(cartData));
    }
  }, [cartData, dispatch]);
  return (
    <Layout>
      {notificationStatus && (
        <Notification
          title={notificationStatus.title}
          status={notificationStatus.status}
          message={notificationStatus.message}
        />
      )}
      {isShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
