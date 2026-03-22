// import { configureStore } from "@reduxjs/toolkit"
// import userReducer from './slices/userSlice'
// const store = configureStore({
//     reducer:{
//         userInfo:userReducer,
//     },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
const store = configureStore({
  reducer: {
    userdata: userReducer
  }
});
export default store;      