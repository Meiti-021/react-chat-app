import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { languages } from "../utils/languages";
import { languageType } from "../utils/languageType";
import { enqueueSnackbar } from "notistack";
const initialState: {
  darkmode: boolean;
  fontSize: number | number[];
  messageCorner: number | number[];
  isLogin: boolean;
  language: languageType;
  langugaeType: string;
} = {
  darkmode: false,
  fontSize: 16,
  messageCorner: 5,
  isLogin: localStorage.getItem("login") === "true" ? true : false,
  language: languages.en,
  langugaeType: "en",
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
    switchLanguage: (state, action: PayloadAction<string>) => {
      if (action.payload === "en") {
        state.language = languages.en;
        state.langugaeType = "en";
      } else if (action.payload === "tr") {
        state.language = languages.tr;
        state.langugaeType = "tr";
      } else if (action.payload === "fa") {
        enqueueSnackbar({
          variant: "error",
          message: "This fueature will be added soon!",
        });
      } else {
        enqueueSnackbar({ variant: "error", message: "404! invalid language" });
      }
    },
  },
});

export const {
  switchDarkmode,
  changeFontSize,
  changeMessageCorner,
  logIn,
  logOut,
  switchLanguage,
} = settingSlice.actions;

export default settingSlice.reducer;
