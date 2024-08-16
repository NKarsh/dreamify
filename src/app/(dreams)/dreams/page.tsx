"use client";
import React, { useState } from "react";
import DreamInputCard from "@/components/DreamInputCard";
import HeatMapCard from "@/components/HeatMapCard";
import DreamsCarousel from "@/components/DreamsCarousel";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserName, RootType } from "@/store/userSlice";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const username: string = useSelector(
    (state: { username: RootType }) => state.username.value
  );
  const router = useRouter();
  const dispach = useDispatch();

  return (
    <div className="grid gap-4">
      <div className="flex justify-center w-96 sm:w-[30rem]">
        <div className="w-full font-bold">Hi, {username}</div>
        <div
          className="w-20 bg-gray flex justify-center 
                     rounded-full bg-red-400 text-white 
                     p-1 hover:cursor-pointer text-sm"
          onClick={() => {
            dispach(deleteUserName(""));
            router.push("/");
          }}
        >
          Logout
        </div>
      </div>
      <HeatMapCard />
      <DreamInputCard />
      <DreamsCarousel />
    </div>
  );
};

export default Dashboard;
