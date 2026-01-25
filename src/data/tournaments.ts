type Tournament = {
  name: string;
  place: string;
  date: string;
  placements: {
    numberOfTeams?: number;
    finalPlacement?: number;
    spirit?: number;
  };
  links?: {
    scores?: string;
    media?: string[];
  };
};

type Season = {
  year: number;
  season: "Indoor" | "Outdoor";
  tournaments: Tournament[];
};

export const seasons: Season[] = [
  {
    year: 2023,
    season: "Outdoor",
    tournaments: [
      {
        name: "WTP",
        place: "Jena",
        date: "18.06/19.06",
        placements: {
          numberOfTeams: 20,
          finalPlacement: 6,
          spirit: 2,
        },
        links: {
          scores:
            "https://docs.google.com/spreadsheets/d/16SCXeF21rlEhA-fwwQw-dnacvCPuKsSxE_IWh3zUUpY/edit?usp=drive_link",
          media: [
            "https://photos.google.com/share/AF1QipOk-kbywvPh3lhse42eMek9Cynk3g9wXVb02G-kpiG-9z1kGGFgLK7QFqcMx9GX8w?key=Q3NGT3cxUnRDajQ2VzVIZVRleWdKaGVkMlRuQjNB",
            "https://docs.google.com/spreadsheets/d/1owhRxrhHxC5FAABJimrmJyScu9Hl_lY56Z0ngLw213w/edit#gid=1540894208",
          ],
        },
      },
      {
        name: "DM 1. we",
        place: "",
        date: "25.06/26.06",
        placements: {},
      },
      {
        name: "Fackelup",
        place: "Braunschweig",
        date: "05.08/06.08",
        placements: {
          numberOfTeams: 24,
          finalPlacement: 16,
          spirit: 2,
        },
        links: {
          scores: "https://fackelup.de/tournaments/2023/games",
          media: [
            "https://photos.google.com/share/AF1QipNc4EUqCNajOzBTKSYBeqTDvkpjLw2F3_NsdXMrGFREksmfKToMh6lcXKwODqe9_w?key=MlhlOENaV09JRnVVLUVCbzF3VldLSzlSU0NEbEF3",
            "https://www.youtube.com/watch?v=5wbdWoQY9Ww",
            "https://www.youtube.com/watch?v=E9aqjnA1zLE",
            "https://ultiversum.com/tournaments/2023/spirit/results/BVVAg-ybVPB-iMbCk-aNopx-NavVp",
          ],
        },
      },
      {
        name: "DM 2. we",
        place: "Greifswald",
        date: "09.09/10.09",
        placements: {
          numberOfTeams: 9,
          finalPlacement: 7,
        },
        links: {
          scores:
            "https://scores.frisbeesportverband.de/?view=seriesstatus&series=1574",
        },
      },
    ],
  },
  {
    year: 2022,
    season: "Outdoor",
    tournaments: [
      {
        name: "Welcome to paradise",
        place: "Jena",
        date: "18/6-19/6",
        placements: {
          numberOfTeams: 20,
          finalPlacement: 9,
          spirit: 1,
        },
        links: {
          scores:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfxA1jeNWGC7UEUU6iXl0xVCn0OXlESNdJCZ5DLC_yfkOKOvbTjnPVAxPfznhACB9lkVBtrINsZDkf/pubhtml?gid=1222105276&single=true",
          media: ["https://1drv.ms/u/s!AnVJQhm6EeC2sVfA8ReOaCbfvE9W?e=XhNdY7"],
        },
      },
      {
        name: "Topcat",
        place: "Poland",
        date: "1/7-3/7",
        placements: {
          numberOfTeams: 12,
          finalPlacement: 12,
          spirit: 1,
        },
      },
      {
        name: "RotAirnament",
        place: "Berlin",
        date: "17/9-18/9",
        placements: {
          numberOfTeams: 12,
          finalPlacement: 12,
          spirit: 1,
        },
        links: {
          media: [
            "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBblZKUWhtNkVlQzJ0Q0ZhNE5kMTAtVkhvS3BHP2U9MGUzZk9r&id=B6E011BA19424975%216689&cid=B6E011BA19424975",
          ],
        },
      },
      {
        name: "BBM",
        place: "Berlin",
        date: "17/9-18/9",
        placements: {
          numberOfTeams: 5,
          finalPlacement: 4,
          spirit: 1,
        },
        links: {
          scores:
            "https://docs.google.com/spreadsheets/d/1v_NE3J69QSs9FUJXO5huxCtJ5oO3wAWfd8AWh11ua-g/edit?gid=1540894208#gid=1540894208",
        },
      },
    ],
  },
  {
    year: 2022,
    season: "Indoor",
    tournaments: [
      {
        name: "Winter Beach (as Trepthrowers)",
        place: "Vilnius",
        date: "10/2-12/2",
        placements: {
          numberOfTeams: 16,
          finalPlacement: 16,
        },
        links: {
          media: [
            "https://www.facebook.com/media/set/?set=a.668583207918498&type=3",
            "https://www.facebook.com/media/set/?set=a.668070917969727&type=3",
            "https://youtu.be/4_jUqfpY0AI?t=4066",
          ],
        },
      },
    ],
  },
];
