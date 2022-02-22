import { createSlice } from "@reduxjs/toolkit";

const itemsState = {
  item: [],
  totalAmount: 0,
  changed: false,
};

const cartItemsArraySlice = createSlice({
  name: "items",
  initialState: itemsState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.item = action.payload.item;
      state.changed = false;
    },
    ADD(state, action) {
      const newProduct = {
        id: Math.random() * 101,
        title: action.payload.title,
        price: action.payload.price,
        quantity: 1,
        total: action.payload.price,
      };
      // state.changed = true;
      // const existingItem = state.item.find(
      //   (item) => item.title === newProduct.title
      // );
      // if (existingItem) {
      //   existingItem.quantity += 1;
      //   existingItem.total += existingItem.price;
      // } else {
      //   state.item.push(newProduct);
      // }

      state.totalAmount++;
    },

    INCREASE(state, action) {
      state.changed = true;
      const index = state.item
        .map((element) => element.id === action.payload)
        .indexOf(true);

      state.item[index]["quantity"] += 1;
      state.item[index]["total"] =
        state.item[index]["quantity"] * state.item[index]["price"];
      state.totalAmount = state.item
        .map((element) => element.quantity)
        .reduce((total, amount) => total + amount);
    },
    DECREASE(state, action) {
      state.changed = true;
      const index = state.item
        .map((element) => element.id === action.payload)
        .indexOf(true);

      if (state.item[index]["quantity"] > 1) {
        state.item[index]["quantity"] -= 1;
        state.item[index]["total"] =
          state.item[index]["quantity"] * state.item[index]["price"];
        state.totalAmount = state.item
          .map((element) => element.quantity)
          .reduce((total, amount) => total + amount);
      } else {
        state.item = state.item.filter(
          (element) => element.id !== action.payload
        );
        state.totalAmount--;
      }
    },
  },
});

export const cartItemAction = cartItemsArraySlice.actions;
export default cartItemsArraySlice;
