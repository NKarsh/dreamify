"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";
import { RootType } from "@/store/dreamsSlice";
import { motion, useMotionValue, useTransform } from "framer-motion";

const DreamsCarousel = () => {
  const dreams = useSelector(
    (state: { dreams: RootType }) => state.dreams.value
  );

  return (
    <Carousel className="h-full w-full mt-3">
      <CarouselContent className="-ml-1">
        {dreams.map((dream, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <motion.div
              className="p-1 bg-white hover:cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
            >
              {dream.description}
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DreamsCarousel;
