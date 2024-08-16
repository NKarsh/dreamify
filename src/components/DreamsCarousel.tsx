"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";
import { RootType } from "@/store/dreamsSlice";
import { motion } from "framer-motion";
import { Dream } from "@/types";

const DreamsCarousel = () => {
  const dreams: Dream[] = useSelector(
    (state: { dreams: RootType }) => state.dreams.value
  );

  return (
    <Carousel className="mt-3 max-w-[30rem]">
      <CarouselContent className="-ml-1">
        {[...dreams]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((dream, index) => (
            <CarouselItem key={index} className="pl-1">
              <motion.div
                className="p-3 bg-white rounded-lg select-none"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center font-bold">
                  {dream.title}
                  <div className="ml-5 text-sm text-gray-400 font-light">
                    {dream.date.toString()}
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
