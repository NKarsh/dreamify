import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "username",
  initialState: { value: "" },
  reducers: {
    setUserName: (state, action) => {
      state.value = action.payload;
    },
    deleteUserName: (state, action) => {
      state.value = "";
    },
  },
});

export const { setUserName, deleteUserName } = userSlice.actions;

export default userSlice.reducer;
export type RootType = ReturnType<typeof userSlice.reducer>;
