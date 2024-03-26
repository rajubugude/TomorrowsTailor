import { configureStore } from "@reduxjs/toolkit";
import TrouserSlice from "./TrouserSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    trouser: TrouserSlice,
    user : userSlice,
  },
});

export default store;
