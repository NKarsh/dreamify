"use client";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dreamsReducer from "@/store/dreamsSlice";

const store = configureStore({
  reducer: {
    dreams: dreamsReducer,
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
