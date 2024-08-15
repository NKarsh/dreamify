"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";
import { RootType } from "@/store/dreamsSlice";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const DreamsCarousel = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const dreams = useSelector(
    (state: { dreams: RootType }) => state.dreams.value
  );

  return (
    <Carousel className="mt-3 max-w-[30rem]">
      <CarouselContent className="-ml-1">
        {[...dreams]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((dream, index) => (
            <CarouselItem key={index} className="pl-1">
              <motion.div
                className="p-3 bg-white rounded-lg select-none"
                onClick={() => setSelectedId(dream._id)}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center font-bold">
                  {dream.name}
                  <div className="ml-5 text-sm text-gray-400 font-light">
                    {dream.date.toDateString()}
                  </div>
                </div>
                <div>{dream.description}</div>
                <div className="mt-2 text-gray-400">Explanation</div>
                <div>{dream.explanation}</div>
              </motion.div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DreamsCarousel;
