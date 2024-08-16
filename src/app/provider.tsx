"use client";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dreamsReducer from "@/store/dreamsSlice";
import userSlice from "@/store/userSlice";

const store = configureStore({
  reducer: {
    dreams: dreamsReducer,
    username: userSlice,
  },
});

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
