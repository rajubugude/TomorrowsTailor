import { createSlice } from "@reduxjs/toolkit";

export const trouserSlice = createSlice({
  name: "trouser",
  initialState: {
    calculatedPoints: {},
    frontviewpoints: {}, // Renamed from filteredpoints to frontviewpoints
    objlenForVector: 0,
  },
  reducers: {
    setCalculatedPoints: (state, action) => {
      state.calculatedPoints = action.payload;
    },
    setFrontViewPoints: (state, action) => {
      // Changed from setFilteredPoints to setFrontViewPoints
      state.frontviewpoints = action.payload;
    },
    setObjlenForVector: (state, action) => {
      state.objlenForVector = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCalculatedPoints, setFrontViewPoints, setObjlenForVector } =
  trouserSlice.actions;

export default trouserSlice.reducer;
