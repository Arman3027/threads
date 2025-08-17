import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu/MenuSlice";
import reportProblemSlice from "./features/reportProblem/ReportProblemSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    reportProblem: reportProblemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
