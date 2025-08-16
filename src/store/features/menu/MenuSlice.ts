import { createSlice } from "@reduxjs/toolkit";

import type { MenuStateType } from "./type";

const initialState: MenuStateType = {
  isThemeSelectorActive: false,
  isOptionMenuActive: false,
  isReportMenuActive: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    showMenu: () => ({ ...initialState, isOptionMenuActive: true }),
    exitMenu: () => ({ ...initialState, isOptionMenuActive: false }),
    showThemeMenu: () => ({
      ...initialState,
      isThemeSelectorActive: true,
    }),
    exitThemeMenu: () => ({
      ...initialState,
      isThemeSelectorActive: false,
    }),
    showReportMenu: () => ({
      ...initialState,
      isReportMenuActive: true,
    }),
    exitReportMenu: () => ({
      ...initialState,
      isReportMenuActive: false,
    }),
    resetMenu: () => ({
      ...initialState,
      isOptionMenuActive: false,
      isThemeSelectorActive: false,
      isReportMenuActive: false,
    }),
  },
});

export default menuSlice;
export const {
  showMenu,
  exitMenu,
  showThemeMenu,
  exitThemeMenu,
  showReportMenu,
  exitReportMenu,
  resetMenu,
} = menuSlice.actions;
