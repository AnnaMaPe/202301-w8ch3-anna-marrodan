import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderedMac } from "../../../data/types";

const initialOrder: Order = {
  id: "14",
  listOfProducts: [
    {
      id: "122",
      productName: "Mac Saurus",
      price: 1278,
      image: "toGuapo.jpg",
    },
  ],
  customer: "Rouman",
  state: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrder,
  reducers: {
    addToOrder: (currentMacs, action: PayloadAction<OrderedMac>) => {
      currentMacs.listOfProducts.push(action.payload);
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const { addToOrder: addToOrderActionCreator } = orderSlice.actions;
