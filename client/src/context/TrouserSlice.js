import { createSlice } from "@reduxjs/toolkit";

export const trouserSlice = createSlice({
  name: "trouser",
  initialState: {
    calculatedPoints: {},
    frontviewpoints: {}, // Renamed from filteredpoints to frontviewpoints
    objlenForVector: 0,
    backviewpoints: {},
    gridviewpoints: {},
    formulae:{},
    customiseduservalues:{},
    calculatedPointsPixels:{},
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
    setbackviewpoints: (state, action) => {
      state.backviewpoints = action.payload;
    },
    setgridviewpoints: (state, action) => {
      state.gridviewpoints = action.payload;
    },
    setformulae: (state, action) => {
      state.formulae = action.payload;
    },
    setcustomiseduservalues: (state, action) => {
      state.customiseduservalues = action.payload;
    },
    setcalculatedPointsPixels:(state, action) => {
      state.calculatedPointsPixels = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setCalculatedPoints,
  setFrontViewPoints,
  setObjlenForVector,
  setbackviewpoints,
  setgridviewpoints,
  setformulae,
  setcustomiseduservalues,
  setcalculatedPointsPixels,
} = trouserSlice.actions;

export default trouserSlice.reducer;
