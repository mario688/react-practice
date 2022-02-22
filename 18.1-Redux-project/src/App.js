import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
function App() {
  const isLogin = useSelector((state) => state.login.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isLogin && <UserProfile />}
      {!isLogin && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
