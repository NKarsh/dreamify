"use client";
import { Button } from "@/components/ui/button";
import { RootType, setUserName } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const [usernameKey, setUsernameKey] = useState<string>("");
  const [error, setError] = useState<string>("");
  const username: string = useSelector(
    (state: { username: RootType }) => state.username.value
  );
  const dispach = useDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    if (usernameKey.trim() === "") setError("something went wrong, try again");
    else {
      dispach(setUserName(usernameKey));
      router.push("/dreams");
    }
  };

  return (
    <div className="bg-white w-72 h-36 grid justify-center items-center rounded-lg shadow-lg">
      <div className="text-center font-bold">Enter Username</div>
      <input
        type="text"
        id="username"
        name="username"
        className="border-2 rounded-sm p-1"
        placeholder="Write your username"
        onChange={(e) => setUsernameKey(e.target.value.replace(/\s/g, ""))}
        value={usernameKey}
      />
      <div className="text-sm text-red-500">{error}</div>
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </div>
  );
};

export default Landing;
