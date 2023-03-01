import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MacsStructure } from "../../../data/types";

const initialState: MacsStructure = [];

const macsSlice = createSlice({
  name: "macs",
  initialState,
  reducers: {
    loadMacs: (currentMacs, action: PayloadAction<MacsStructure>) => [
      ...action.payload,
    ],
  },
});

export const macsReducer = macsSlice.reducer;
export const { loadMacs: loadMacsActionCreator } = macsSlice.actions;
