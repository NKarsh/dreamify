"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import JSConfetti from "js-confetti";
import HeatMap from "@uiw/react-heat-map";
import { Button } from "@/components/ui/button";

const addConfetti = () => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["🌙", "😴", "💤"],
    emojiSize: 30,
  });
};

const Dashboard = () => {
  const oneYear = new Date();
  oneYear.setFullYear(oneYear.getFullYear() - 1);
  const scrollDreams = useMotionValue(0);
  const items = [
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "",
    "",
    "",
  ];

  const [lastCheckin, setLastCheckin] = useState<Date>(new Date());
  const [name, setName] = useState<string>("Nitzan");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid gap-4">
      <div className="flex justify-center w-full">
        <div className="w-full font-bold">Hi, {name}</div>
        <div className="w-20 bg-gray flex justify-center">Logout</div>
      </div>
      <div className="flex justify-center w-[30rem] h-32 bg-white rounded-xl p-2">
        <HeatMap
          legendCellSize={0}
          width={"full"}
          height={"full"}
          value={[{ date: "01/01/2024", count: 1 }]}
          startDate={oneYear}
          panelColors={{
            1: "#B667E0",
          }}
        />
      </div>
      <div className="grid gap-2 mt-3">
        <div>Check in dream</div>
        <div className="flex justify-center w-[30rem] h-36 max-h-48 bg-white rounded-xl p-2">
          <textarea
            disabled={false}
            placeholder="Write your dream here..."
            className="w-full resize-none border-2 h-full border-border rounded-xl p-2"
          />
        </div>
        <motion.div
          className="w-[30rem] bg-purple-500 
                   text-white rounded-lg h-9 
                     flex items-center justify-center  
                     hover:cursor-pointer select-none"
          onClick={() => addConfetti()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Dream check-in {lastCheckin.toLocaleDateString()}
        </motion.div>
      </div>
      <div className="grid gap-2 mt-3">
        <div>Previouse dreams</div>
        <motion.div
          onScroll={(e) =>
            scrollDreams.set((e.currentTarget as HTMLDivElement).scrollTop)
          }
          className="overflow-y-scroll h-96"
          ref={containerRef}
        >
          {items.map((item, index) => (
            <ListItem
              containerRef={containerRef}
              key={index}
              item={item}
              index={index}
              y={scrollDreams}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface ListItemProps {
  item: string;
  index: number;
  y: any; // The type of `y` will be MotionValue<number>
  containerRef: React.RefObject<HTMLDivElement>;
}

const ListItem = ({ item, index, y, containerRef }: ListItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemHeight, setItemHeight] = useState(0);

  useLayoutEffect(() => {
    if (itemRef.current) {
      setItemHeight(itemRef.current.offsetHeight);
    }
  }, []);

  const inputRange = [
    -(containerRef.current?.offsetHeight || 0) / 2 + index * itemHeight,
    index * itemHeight,
    (containerRef.current?.offsetHeight || 0) / 2 + index * itemHeight,
  ];

  const opacity = useTransform(y, inputRange, [0.1, 1, 0.1]);
  const scale = useTransform(y, inputRange, [0.9, 1.1, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{
        opacity,
        scale,
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        margin: "10px 0",
      }}
    >
      {item}
    </motion.div>
  );
};

export default Dashboard;
