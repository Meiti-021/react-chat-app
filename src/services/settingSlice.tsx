import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { en, tr } from "../utils/languages";
import { languageType } from "../utils/languageType";
const initialState: {
  darkmode: boolean;
  fontSize: number | number[];
  messageCorner: number | number[];
  isLogin: boolean;
  language: languageType;
} = {
  darkmode: false,
  fontSize: 16,
  messageCorner: 5,
  isLogin: localStorage.getItem("login") === "true" ? true : false,
  language: tr,
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    switchDarkmode: (state) => {
      state.darkmode = !state.darkmode;
    },
    changeFontSize: (
      state,
      action: PayloadAction<{ newValue: number | number[] }>
    ) => {
      state.fontSize = action.payload.newValue;
    },
    changeMessageCorner: (
      state,
      action: PayloadAction<{ newValue: number | number[] }>
    ) => {
      state.messageCorner = action.payload.newValue;
    },
    logIn: (state) => {
      state.isLogin = true;
      localStorage.setItem("login", "true");
    },
    logOut: (state) => {
      state.isLogin = false;
      localStorage.removeItem("login");
      console.log(state.isLogin);
    },
  },
});

export const {
  switchDarkmode,
  changeFontSize,
  changeMessageCorner,
  logIn,
  logOut,
} = settingSlice.actions;

export default settingSlice.reducer;
