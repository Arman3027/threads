import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu/MenuSlice";

export const store = configureStore({
  reducer: { menu: menuSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
