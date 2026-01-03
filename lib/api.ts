export async function fetchMatches(data: {
  skills: string;
  role: string;
  goal: string;
}) {
    const res = await fetch("/api/match", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to fetch matches");
    }

    return res.json();
}