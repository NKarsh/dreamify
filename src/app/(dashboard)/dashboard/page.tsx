"use client";
import React, { useState } from "react";
import DreamInputCard from "@/components/DreamInputCard";
import HeatMapCard from "@/components/HeatMapCard";
import DreamsCarousel from "@/components/DreamsCarousel";

const Dashboard = () => {
  const [name, setName] = useState<string>("Nitzan");

  return (
    <div className="grid gap-4">
      <div className="flex justify-center w-full">
        <div className="w-full font-bold">Hi, {name}</div>
        <div className="w-20 bg-gray flex justify-center">Logout</div>
      </div>
      <HeatMapCard />
      <DreamInputCard />
      <DreamsCarousel />
    </div>
  );
};

export default Dashboard;
