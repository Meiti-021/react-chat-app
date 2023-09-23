import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: {
  darkmode: boolean;
  fontSize: number | number[];
  messageCorner: number | number[];
  isLogin: boolean;
} = {
  darkmode: false,
  fontSize: 16,
  messageCorner: 5,
  isLogin: false,
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
    },
    logOut: (state) => {
      state.isLogin = false;
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
