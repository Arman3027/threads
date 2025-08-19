import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { MenuStateType } from "./type";

const initialState: MenuStateType = {
  isThemeSelectorActive: false,
  isOptionMenuActive: false,
  activePost: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    showMenu: (state) => {
      state.isOptionMenuActive = true;
    },
    exitMenu: (state) => {
      state.isOptionMenuActive = false;
    },
    showThemeMenu: (state) => {
      state.isThemeSelectorActive = true;
    },
    exitThemeMenu: (state) => {
      state.isThemeSelectorActive = false;
    },
    togglePostMenu: (state, action: PayloadAction<string | null>) => {
      state.activePost =
        action.payload === state.activePost ? null : action.payload;
    },
  },
});

export default menuSlice.reducer;
export const {
  showMenu,
  exitMenu,
  showThemeMenu,
  exitThemeMenu,
  togglePostMenu,
} = menuSlice.actions;
