"use client";
import { addDream, RootType } from "@/store/dreamsSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import JSConfetti from "js-confetti";
import { RootType as UserRootType } from "@/store/userSlice";

const addConfetti = () => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["🌙", "😴", "💤"],
    emojiSize: 30,
  });
};

async function analyzeDream(dreamDescription: string, username: string) {
  const response = await fetch("/api/dreams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dreamDescription, username }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze dream");
  }

  const data = await response.json();
  return data;
}

const DreamInputCard = () => {
  const [dreamContent, setDreamContent] = useState<string>("");
  const dispach = useDispatch();
  const username: string = useSelector(
    (state: { username: UserRootType }) => state.username.value
  );

  const analyzeDreamButton = () => {
    analyzeDream(dreamContent, username).then((v) => {
      addConfetti();
      setDreamContent("");
      dispach(addDream(v));
    });
  };

  return (
    <div className="grid gap-2 mt-3">
      <div>Check-in dream</div>
      <div className="flex justify-center w-[30rem] h-36 max-h-48 bg-white rounded-xl p-2">
        <textarea
          disabled={false}
          placeholder="Write your dream here..."
          className="w-full resize-none border-2 h-full border-border rounded-xl p-2"
          onChange={(e) => setDreamContent(e.target.value)}
          value={dreamContent}
        />
      </div>
      <Button className="bg-purple" onClick={() => analyzeDreamButton()}>
        Draem Check-In
      </Button>
    </div>
  );
};

export default DreamInputCard;
