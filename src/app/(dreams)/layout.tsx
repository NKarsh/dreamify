"use client";
import { setDreams } from "@/store/dreamsSlice";
import { RootType } from "@/store/userSlice";
import { Dream } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

async function getDreamsForUser(username: string): Promise<Dream[]> {
  try {
    const response = await fetch(`/api/dreams?username=${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("response was not ok");
    }
    const result = await response.json();
    return result as Dream[];
  } catch (error) {
    console.error("Error fetching dreams:", error);
    throw error;
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const username: string = useSelector(
    (state: { username: RootType }) => state.username.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDreams = async () => {
      if (!loading || username.trim() === "") return;

      try {
        const fetchedDreams = await getDreamsForUser(username);
        dispatch(setDreams(fetchedDreams as Dream[]));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDreams();
  }, [dispatch, username, loading]);

  if (username.trim() === "") {
    return <div>You must enter user name</div>;
  }

  if (loading || error) return <div></div>;

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
