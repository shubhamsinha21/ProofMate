import { NextResponse } from "next/server";
import { aiMatch } from "@/lib/aiMatcher";

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
    const input = await req.json();

    const results = aiMatch(input, USERS);

    return NextResponse.json({
        success: true,
        matches: results,
    })

}