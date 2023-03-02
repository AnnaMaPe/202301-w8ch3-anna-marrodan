import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { macsReducer } from "./features/macs/macsSlice";
import { orderReduce } from "./features/order/orderSlice";
import { userReducer } from "./features/user/userSlice";

export const store = configureStore({
  reducer: { macs: macsReducer, user: userReducer, order: orderReduce },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
