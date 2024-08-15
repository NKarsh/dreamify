import { Dream } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const dreamsSlice = createSlice({
  name: "dreams",
  initialState: {
    value: [
      {
        name: "Dream1",
        description: "Description1",
        date: new Date("2024-05-01"),
      },
      {
        name: "Dream2",
        description: "Description2",
        date: new Date("2024-05-01"),
      },
      {
        name: "Dream3",
        description: "Description3",
        date: new Date("2024-07-01"),
      },
    ] as Dream[],
  },
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
