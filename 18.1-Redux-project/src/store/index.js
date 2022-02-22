import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import loginReducer from "./auth";
const store = configureStore({
  reducer: { counter: counterReducer, login: loginReducer },
});

export default store;
