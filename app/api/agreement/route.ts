import { NextResponse } from "next/server";
import { generatedHash } from "@/lib/hash";
import { TeamAgrement } from "@/lib/teamAgreement";

export async function POST(req:Request) {
    const agreement: TeamAgrement = await req.json();

    const hash = generatedHash(agreement);

    return NextResponse.json({
        success: true,
        agreement,
        hash,
    });
}