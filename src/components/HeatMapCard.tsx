"use client";
import { RootType } from "@/store/dreamsSlice";
import HeatMap from "@uiw/react-heat-map";
import React from "react";
import { useSelector } from "react-redux";

const HeatMapCard = () => {
  const oneYear = new Date();
  oneYear.setMonth(oneYear.getMonth() - 6);

  const dreams = useSelector(
    (state: { dreams: RootType }) => state.dreams.value
  );

  return (
    <div className="flex justify-center w-[30rem] h-32 bg-white rounded-xl p-2">
      <HeatMap
        legendCellSize={0}
        width={"full"}
        height={"full"}
        value={[]}
        startDate={oneYear}
        panelColors={{
          1: "#E7C6F8",
          2: "#CC94EA",
          3: "#B667E0",
        }}
      />
    </div>
  );
};

export default HeatMapCard;
