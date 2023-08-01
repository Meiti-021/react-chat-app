import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
