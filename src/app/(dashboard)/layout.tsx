"use client";

import { motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex w-full h-full">
        <div className="w-full h-full mt-10 flex justify-center items-center">
          {children}
        </div>
      </div>

      <div className="absolute z-[-10]  w-full h-full top-0">
        <div className="w-full h-full flex justify-center items-center">
          <motion.div
            className="bg-gradient-to-b from-[#FF7BD2]/90 blur-2xl to-[#F58A25]/70  w-[35rem] h-[35rem] rounded-full absolute"
            initial={{ x: 300, y: 100 }}
            animate={{ x: -300, y: -100, rotate: 200 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="bg-gradient-to-b from-[#FF7BD2]/90 blur-2xl to-[#F58A25]/70  w-[35rem] h-[35rem] rounded-full absolute"
            initial={{ x: -300, y: 100 }}
            animate={{ x: 300, y: -100, rotate: 200 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="bg-gradient-to-b from-[#FF7BD2] blur-3xl to-[#F58A25]/70  w-[50rem] h-[50rem] rounded-full"
            initial={{ x: -10, y: 10 }}
            animate={{ x: 10, y: -10 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}
