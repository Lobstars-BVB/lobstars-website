type Tournament = {
  name: string;
  place: string;
  date: string;
  placements: {
    numberOfTeams: number;
    finalPlacement: number;
    spirit: number;
  };
  links?: {
    scores?: string;
    media?: string[];
  };
};

type Season = {
  year: number;
  season: "indoor" | "outdoor";
  tournaments: Tournament[];
};

export const seasons: Season[] = [
  {
    year: 2025,
    season: "outdoor",
    tournaments: [
      {
        name: "Paradisco",
        place: "Jena",
        date: "23/6-24/6",
        placements: {
          numberOfTeams: 10,
          finalPlacement: 0,
          spirit: 0,
        },
        links: {
          scores: "link",
          media: ["link"],
        },
      },
    ],
  },
  {
    year: 2024,
    season: "outdoor",
    tournaments: [
      {
        name: "Paradisco",
        place: "Jena",
        date: "23/6-24/6",
        placements: {
          numberOfTeams: 10,
          finalPlacement: 0,
          spirit: 0,
        },
      },
    ],
  },
];
