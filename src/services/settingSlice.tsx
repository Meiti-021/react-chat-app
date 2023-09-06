import { createSlice } from "@reduxjs/toolkit";
const initialState: {
  darkmode: boolean;
} = {
  darkmode: true,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    switchDarkmode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { switchDarkmode } = settingSlice.actions;

export default settingSlice.reducer;
