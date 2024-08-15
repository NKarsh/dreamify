"use client";
import { RootType } from "@/store/dreamsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import JSConfetti from "js-confetti";

const addConfetti = () => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["🌙", "😴", "💤"],
    emojiSize: 30,
  });
};

async function analyzeDream(dreamDescription: string) {
  const response = await fetch("/api/groq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dreamDescription }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze dream");
  }

  const data = await response.json();
  return data; // Assuming the server responds with a `content` field containing the result
}

const DreamInputCard = () => {
  const [lastCheckin, setLastCheckin] = useState<Date>(new Date());
  const [dreamContent, setDreamContent] = useState<string>("");
  const dreams = useSelector(
    (state: { dreams: RootType }) => state.dreams.value
  );

  const analyzeDreamButton = () => {
    let data = analyzeDream(dreamContent).then((v) => {
      addConfetti();
      console.log(v);
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
