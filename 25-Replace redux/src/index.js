import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/products-context";
import "./index.css";
import App from "./App";
import ProductReducer from "./store/reducers/products";
import configureStore from "./hooks-store/products-store";
// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);
configureStore();
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
