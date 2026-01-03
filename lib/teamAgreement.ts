export type TeamMember = {
    name:string;
    role:string;
    responsibilities: string[];
};

export type TeamAgrement = {
    teamId: string;
    hackathon: string;
    goal: string;
    members: TeamMember[];
    createdAt: string;
};