import { Dream } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const dreamsSlice = createSlice({
  name: "dreams",
  initialState: { value: [] as Dream[] },
  reducers: {
    addDream: (state, action) => {
      state.value.push(action.payload);
    },
    setDreams: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addDream, setDreams } = dreamsSlice.actions;

export default dreamsSlice.reducer;
export type RootType = ReturnType<typeof dreamsSlice.reducer>;
