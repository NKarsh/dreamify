import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { configureStore } from "@reduxjs/toolkit";
import dreamsReducer from "@/store/dreamsSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    dreams: dreamsReducer,
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
