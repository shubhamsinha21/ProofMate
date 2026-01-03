type User = {
  name: string;
  skills: string;
  role: string;
  goal: string;
};

type MatchResult = {
  user: User;
  score: number;
  reason: string;
};

export function aiMatch(input: User, candidates: User[]): MatchResult[] {
  const inputSkills = input.skills.toLowerCase().split(",");

  return candidates
    .map((candidate) => {
      let score = 0;
      let reasons: string[] = [];

      // Skill overlap
      inputSkills.forEach((skill) => {
        if (candidate.skills.toLowerCase().includes(skill.trim())) {
          score += 30;
          reasons.push(`Shared skill: ${skill.trim()}`);
        }
      });

      // Complementary role
      if (candidate.role !== input.role) {
        score += 20;
        reasons.push("Complementary role");
      }

      // Goal alignment
      if (candidate.goal === input.goal) {
        score += 20;
        reasons.push("Aligned hackathon goal");
      }

      return {
        user: candidate,
        score: Math.min(score, 100),
        reason: reasons.join(", "),
      };
    })
    .sort((a, b) => b.score - a.score);
}
