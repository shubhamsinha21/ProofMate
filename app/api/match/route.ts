import { NextResponse } from "next/server";

type User = {
  name: string;
  skills: string;
  role: string;
  goal: string;
};

// temporary mock users
const USERS: User[] = [
  { name: "Alice", skills: "React, Node", role: "frontend", goal: "win" },
  { name: "Bob", skills: "Python, AI", role: "ai", goal: "learn" },
  { name: "Charlie", skills: "Solidity, Ethereum", role: "blockchain", goal: "win" },
];

export async function POST(req: Request){
    try {
        const body = await req.json();
        const { skills, role, goal } = body;

        const userSkills = skills.toLowerCase().split(",");

        const matches = USERS.filter((u) => {
            const skillsMatch = userSkills.some((skill: string) =>
                u.skills.toLowerCase().includes(skill.trim())
            );

            const roleMatch = u.role === role.toLowerCase();
            const goalMatch = u.goal === goal.toLowerCase();

            return skillsMatch || roleMatch || goalMatch;
        });

        return NextResponse.json({
            success: true,
            matches,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Invalid request" },
            { status: 400 }
        )
    }
}