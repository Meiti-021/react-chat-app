import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: {
  darkmode: boolean;
  fontSize: number | number[];
  messageCorner: number | number[];
} = {
  darkmode: true,
  fontSize: 16,
  messageCorner: 5,
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
  },
});

export const { switchDarkmode, changeFontSize, changeMessageCorner } =
  settingSlice.actions;

export default settingSlice.reducer;
