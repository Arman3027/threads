import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./features/menu/MenuSlice";
import reportProblemSlice from "./features/reportProblem/ReportProblemSlice";
import api from "./services/api";

const rootReducer = {
  menu: menuSliceReducer,
  reportProblem: reportProblemSlice.reducer,
  [api.reducerPath]: api.reducer,
};
export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};
export type AppDispatch = typeof Store.dispatch;
