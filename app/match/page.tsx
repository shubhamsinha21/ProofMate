"use client";

import { useState } from "react";
import SkillForm from "@/components/SkillForm";

type Match = {
  name: string;
  skills: string;
  role: string;
  goal: string;
};

export default function MatchPage() {
  const [matches, setMatches] = useState<Match[]>([]);

  const handleSubmit = (data: Match) => {
    // For now, dummy matches
    setMatches([
      { name: "Alice", skills: "React, Node", role: "frontend", goal: "win" },
      { name: "Bob", skills: "Python, AI", role: "AI", goal: "learn" },
      { name: "Charlie", skills: "Solidity, Ethereum", role: "blockchain", goal: "win" },
    ]);
  };

  return (
    <main className="min-h-screen p-10">
      <h2 className="text-2xl font-bold mb-4">
        Find Compatible Teammates
      </h2>
      <SkillForm onSubmit={handleSubmit} />

      {matches.length > 0 && (
        <div className="mt-8 grid gap-4">
          {matches.map((m, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <h3 className="font-bold">{m.name}</h3>
              <p>Skills: {m.skills}</p>
              <p>Role: {m.role}</p>
              <p>Goal: {m.goal}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
