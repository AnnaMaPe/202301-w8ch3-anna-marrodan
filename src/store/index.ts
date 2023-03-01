import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { macsReducer } from "./features/macs/macsSlice";

export const store = configureStore({
  reducer: { macs: macsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
