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

          {matches.map((m:any, i: number) => (

            <div 
              key={i} 
              className="border p-4 rounded-lg shadow-sm bg-white"
              >

              <h3 className="font-bold">{m.user.name}</h3>
              <p>Skills: {m.user.skills}</p>
              <p>Role: {m.user.role}</p>
              <p>Goal: {m.user.goal}</p>

              <p className="mt-2 font-semibold">
                Compatibility Score: {m.score}/100
              </p>

              <p className="text-sm text-gray-600">
                Reason: {m.reason}
              </p>

            </div>

          ))}
        </div>
      )}
    </main>
  );
}
