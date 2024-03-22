import { configureStore } from "@reduxjs/toolkit";
import TrouserSlice from "./TrouserSlice";

const store = configureStore({
  reducer: {
    trouser: TrouserSlice,
  },
});

export default store;
