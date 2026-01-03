"use client"

"use client";

import { useState } from "react";

type SkillFormProps = {
  onSubmit: (data: {
    name: string;
    skills: string;
    role: string;
    goal: string;
  }) => void;
};

export default function SkillForm({ onSubmit }: SkillFormProps) {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [role, setRole] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, skills, role, goal });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="Skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="Preferred Role (frontend, backend, AI, etc.)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="Hackathon Goal (win, learn, experiment)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full p-3 border rounded-lg"
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg"
      >
        Find Matches
      </button>
    </form>
  );
}
