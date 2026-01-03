"use client";

import { useState } from "react";
import SkillForm from "@/components/SkillForm";
import { fetchMatches } from "@/lib/api";

type Match = {
  name: string;
  skills: string;
  role: string;
  goal: string;
};

export default function MatchPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: Match) => {
    setLoading(true);

    try {
      const response = await fetchMatches(data);
      setMatches(response.matches);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-10">
      <h2 className="text-2xl font-bold mb-4">Find Compatible Teammates</h2>
      <SkillForm onSubmit={handleSubmit} />

      {loading && <p className="mt-4">Finding matches...</p>}

      {matches.length > 0 && (
        <div className="mt-8 grid gap-4">
          {matches.map((m, i) => (
            <div key={i} className="border p-4 rounded-lg shadow-sm bg-white">
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
