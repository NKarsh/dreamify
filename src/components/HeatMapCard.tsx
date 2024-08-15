"use client";
import { RootType } from "@/store/dreamsSlice";
import { DateCount, Dream } from "@/types";
import HeatMap from "@uiw/react-heat-map";
import React from "react";
import { useSelector } from "react-redux";

const HeatMapCard = () => {
  const oneYear = new Date();
  oneYear.setMonth(oneYear.getMonth() - 6);

  const dreams = useSelector(
    (state: { dreams: RootType }) => state.dreams.value
  );

  const dateCountList: DateCount[] = dreams.reduce(
    (acc: DateCount[], dream: Dream) => {
      const dateString = dream.date.toISOString().split("T")[0]; // Extract the date part only (YYYY-MM-DD)

      const existingDate = acc.find((item) => item.date === dateString);

      if (existingDate) {
        existingDate.count += 1;
      } else {
        acc.push({ date: dateString, count: 1 });
      }

      return acc;
    },
    []
  );

  return (
    <div className="flex justify-center w-[30rem] h-32 bg-white rounded-xl p-2">
      <HeatMap
        legendCellSize={0}
        width={"full"}
        height={"full"}
        value={dateCountList}
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
