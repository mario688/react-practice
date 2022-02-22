import { createSlice } from "@reduxjs/toolkit";
const initialLoginState = {
  isAuthenticated: false,
};
const loginSlice = createSlice({
  name: "authentication",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = loginSlice.actions;
export default loginSlice.reducer;
