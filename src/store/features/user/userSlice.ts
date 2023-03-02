import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MacsStructure } from "../../../data/types";

const initialSelectedMacs: MacsStructure = [];

const userSlice = createSlice({
  name: "user",
  initialState: initialSelectedMacs,
  reducers: {
    selectMac: (currentMacs, action: PayloadAction<string>) =>
      currentMacs.filter((mac) => mac.id === action.payload),

    unselectMac: (currentMacs, action: PayloadAction<string>) =>
      currentMacs.filter((mac) => mac.id !== action.payload),
  },
});

export const userReducer = userSlice.reducer;
export const {
  selectMac: selectMacActionCreator,
  unselectMac: unselectMacActionCreator,
} = userSlice.actions;
