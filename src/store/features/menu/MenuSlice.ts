import { createSlice } from "@reduxjs/toolkit";

import type { MenuStateType } from "./type";

const initialState: MenuStateType = {
  isThemeSelectorActive: false,
  isOptionMenuActive: false,
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
    resetMenu: () => ({
      ...initialState,
      isOptionMenuActive: false,
      isThemeSelectorActive: false,
    }),
  },
});

export default menuSlice;
export const { showMenu, exitMenu, showThemeMenu, exitThemeMenu, resetMenu } =
  menuSlice.actions;
