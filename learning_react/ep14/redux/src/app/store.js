
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
const store = configureStore({
  reducer: {
    userdata: userReducer
  }
});
export default store;      