type Tournament = {
  name: string;
  place: string;
  date: string;
  placements?: {
    numberOfTeams?: number;
    finalPlacement?: number;
    spirit?: number;
  };
  links?: {
    scores?: {
      games?: string;
      spirit?: string;
    };
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
    year: 2026,
    season: "Indoor",
    tournaments: [
      {
        name: "StackUp Indoors",
        place: "Stockholm",
        date: "11.4-12.4",
        placements: {
          numberOfTeams: 13,
          finalPlacement: 13,
          spirit: 2,
        },
      },
    ],
  },
  {
    year: 2025,
    season: "Outdoor",
    tournaments: [
      {
        name: "Tekiela Sunrise",
        place: "Kiel",
        date: "7.6-8.6",
      },
      {
        name: "Welcome to paradise",
        place: "Jena",
        date: "28.6-29.6",
        placements: {
          numberOfTeams: 20,
          finalPlacement: 19,
        },
        links: {
          scores: {
            games:
              "https://docs.google.com/spreadsheets/d/1CVTQVg5SK4PVV_2W3TBJWYWKUjKqSJH0z1BOjnkaZz8/edit?gid=1222105276#gid=1222105276",
          },
          media: [
            "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDYzNDc3ODkwMjczMDM1?igsh=ODFham93dWtsd2h1",
            "https://cloud.lowfill.eu/s/bW68wgHjJxwFope",
          ],
        },
      },
      {
        name: "Fackelup",
        place: "Braunschweig",
        date: "09.8-10.8",
        placements: {
          numberOfTeams: 24,
          finalPlacement: 19,
          spirit: 8,
        },
        links: {
          scores: {
            games: "https://fackelup.de/tournaments/2025/games",
            spirit: "https://fackelup.de/tournaments/2025/spirit/results",
          },
          media: [
            "https://drive.google.com/drive/folders/1kRc5OuBdleDgsM64wQ28P-1ORR01znX5",
          ],
        },
      },
      {
        name: "Wäsche Waschen",
        place: "Eberswalde",
        date: "23.8-24.8",
        placements: {
          numberOfTeams: 12,
          finalPlacement: 7,
          spirit: 8,
        },
        links: {
          scores: {
            games:
              "https://ultiversum.com/tournaments/waesche-waschen-2025/games",
          },
          media: [
            "https://onedrive.live.com/?id=173E4C39EF7C1F0C%21s42c08847f5af438c9584b08de23cccfe&cid=173e4c39ef7c1f0c&ithint=folder&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8xNzNlNGMzOWVmN2MxZjBjL0VrZUl3RUt2OVl4RGxZU3dqZUk4elA0QjF5dGU4aTNDM0NVRDVCZ1pfV2h6c0E%5FZT1qRHNDVjQ",
          ],
        },
      },
      { name: "DM 1. we", place: "Berlin", date: "30.8-31.8" },
      {
        name: "DM 2. we",
        place: "Berlin",
        date: "14.9-15.9",
        placements: { numberOfTeams: 6, finalPlacement: 3 },
        links: {
          scores: {
            games:
              "https://scores.frisbeesportverband.de/?view=seriesstatus&series=1797",
          },
        },
      },
    ],
  },
  {
    year: 2024,
    season: "Outdoor",
    tournaments: [
      {
        name: "Welcome to paradise",
        place: "Jena",
        date: "08.6-09.6",
        placements: {
          numberOfTeams: 20,
        },
      },
      {
        name: "Mucho Gusto",
        place: "Hamburg",
        date: "22.6-23.6",
        placements: {
          numberOfTeams: 12,
          finalPlacement: 11,
          spirit: 1,
        },
        links: {
          scores: {
            games:
              "https://ultiversum.com/tournaments/muchogustocup-2024/games",
          },
        },
      },
      {
        name: "Fackelup",
        place: "Braunschweig",
        date: "20.7-21.7",
        placements: {
          numberOfTeams: 23,
          finalPlacement: 21,
          spirit: 7,
        },
        links: {
          scores: {
            games: "https://fackelup.de/tournaments/2024/games",
            spirit: "https://fackelup.de/tournaments/2024/spirit/results",
          },
        },
      },
      {
        name: "TournaMINT",
        place: "München",
        date: "17.8-18.8",
        placements: {
          numberOfTeams: 16,
          spirit: 1,
          finalPlacement: 10,
        },
      },
      {
        name: "Wäsche Waschen",
        place: "Eberswalde",
        date: "14.9-15.9",
        placements: {
          numberOfTeams: 14,
          finalPlacement: 7,
          spirit: 8,
        },
        links: {
          media: [
            "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvcyFBZ3dmZk84NVRENFhoSnNFcHYxTE1RbjhNUmxxc0E%5FZT1WdVU1aE0&id=173E4C39EF7C1F0C%2168996&cid=173E4C39EF7C1F0C",
          ],
        },
      },
    ],
  },
  {
    year: 2024,
    season: "Indoor",
    tournaments: [
      {
        name: "Scherz im März",
        place: "Regensburg",
        date: "23.3-24.3",
        placements: {
          numberOfTeams: 12,
          spirit: 4,
        },
        links: {
          scores: {
            spirit:
              "https://ultiversum.com/tournaments/scherz-im-maerz-2024/spirit/results",
          },
        },
      },
    ],
  },
  {
    year: 2023,
    season: "Outdoor",
    tournaments: [
      {
        name: "Paganello",
        date: "7.4-9.4",
        place: "Rimini",
      },
      {
        name: "Welcome to paradise",
        place: "Jena",
        date: "18.6-19.6",
        placements: {
          numberOfTeams: 20,
          finalPlacement: 6,
          spirit: 2,
        },
        links: {
          scores: {
            games:
              "https://docs.google.com/spreadsheets/d/16SCXeF21rlEhA-fwwQw-dnacvCPuKsSxE_IWh3zUUpY/edit?usp=drive_link",
          },
          media: [
            "https://photos.google.com/share/AF1QipOk-kbywvPh3lhse42eMek9Cynk3g9wXVb02G-kpiG-9z1kGGFgLK7QFqcMx9GX8w?key=Q3NGT3cxUnRDajQ2VzVIZVRleWdKaGVkMlRuQjNB",
          ],
        },
      },
      {
        name: "DM 1. we",
        place: "Greifswald",
        date: "25.6-26.6",
      },
      {
        name: "Fackelup",
        place: "Braunschweig",
        date: "5.8-6.8",
        placements: {
          numberOfTeams: 24,
          finalPlacement: 16,
          spirit: 2,
        },
        links: {
          scores: {
            games: "https://fackelup.de/tournaments/2023/games",
            spirit:
              "https://ultiversum.com/tournaments/2023/spirit/results/BVVAg-ybVPB-iMbCk-aNopx-NavVp",
          },
          media: [
            "https://photos.google.com/share/AF1QipNc4EUqCNajOzBTKSYBeqTDvkpjLw2F3_NsdXMrGFREksmfKToMh6lcXKwODqe9_w?key=MlhlOENaV09JRnVVLUVCbzF3VldLSzlSU0NEbEF3",
            "https://www.youtube.com/watch?v=5wbdWoQY9Ww",
            "https://www.youtube.com/watch?v=E9aqjnA1zLE",
          ],
        },
      },
      {
        name: "DM 2. we",
        place: "Neubrandenburg",
        date: "9.9-10.9",
        placements: {
          numberOfTeams: 9,
          finalPlacement: 7,
          spirit: 1,
        },
        links: {
          scores: {
            games:
              "https://scores.frisbeesportverband.de/?view=seriesstatus&series=1574",
          },
        },
      },
    ],
  },
  {
    year: 2022,
    season: "Outdoor",
    tournaments: [
      {
        name: "Flying Unicorn Cup Kundl",
        place: "Kundl",
        date: "28.5-29.5",
        placements: {
          numberOfTeams: 14,
          finalPlacement: 13,
          spirit: 1,
        },
        links: {
          scores: {
            games:
              "https://ultimatecentral.com/en_ie/e/flying-unicorn-cup-kundl-2022/standings",
            spirit:
              "https://ultimatecentral.com/en_ie/e/flying-unicorn-cup-kundl-2022/spirit",
          },
        },
      },
      {
        name: "Welcome to paradise",
        place: "Jena",
        date: "18.6-19.6",
        placements: {
          numberOfTeams: 20,
          finalPlacement: 9,
          spirit: 1,
        },
        links: {
          scores: {
            games:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfxA1jeNWGC7UEUU6iXl0xVCn0OXlESNdJCZ5DLC_yfkOKOvbTjnPVAxPfznhACB9lkVBtrINsZDkf/pubhtml?gid=1222105276&single=true",
          },
          media: ["https://1drv.ms/u/s!AnVJQhm6EeC2sVfA8ReOaCbfvE9W?e=XhNdY7"],
        },
      },
      {
        name: "Topcat",
        place: "Poland",
        date: "1.7-3.7",
        placements: {
          numberOfTeams: 12,
          finalPlacement: 12,
          spirit: 1,
        },
      },
      {
        name: "TournaMINT",
        place: "München",
        date: "18.8-19.8",
        placements: {
          numberOfTeams: 13,
          finalPlacement: 12,
          spirit: 4,
        },
        links: {
          scores: {
            games:
              "https://docs.google.com/spreadsheets/d/1wU9e-Xz0QHb1lbPd3OfZ8Xz_1_jnWG97eh9o0pgAiVg/edit?gid=643692636#gid=643692636",
            spirit:
              "https://docs.google.com/spreadsheets/d/1N5WlO00xSP51dp5bnDknRHPOjDvYBRCCVkHuN_mOniw/edit?gid=0#gid=0",
          },
        },
      },
      {
        name: "RotAirnament (Lobstars 1)",
        place: "Berlin",
        date: "17.9-18.9",
        placements: {
          numberOfTeams: 14,
          finalPlacement: 11,
          spirit: 1,
        },
        links: {
          media: [
            "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBblZKUWhtNkVlQzJ0Q0ZhNE5kMTAtVkhvS3BHP2U9MGUzZk9r&id=B6E011BA19424975%216689&cid=B6E011BA19424975",
          ],
          scores: {
            games: "https://ultiversum.com/tournaments/rotairnament-2022/games",
          },
        },
      },
      {
        name: "RotAirnament (Lobstars 2)",
        place: "Berlin",
        date: "17.9-18.9",
        placements: {
          numberOfTeams: 14,
          finalPlacement: 9,
        },
        links: {
          media: [
            "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBblZKUWhtNkVlQzJ0Q0ZhNE5kMTAtVkhvS3BHP2U9MGUzZk9r&id=B6E011BA19424975%216689&cid=B6E011BA19424975",
          ],
          scores: {
            games: "https://ultiversum.com/tournaments/rotairnament-2022/games",
          },
        },
      },
      {
        name: "BBM",
        place: "Berlin",
        date: "17.9-18.9",
        placements: {
          numberOfTeams: 5,
          finalPlacement: 4,
          spirit: 1,
        },
        links: {
          scores: {
            spirit:
              "https://docs.google.com/spreadsheets/d/1v_NE3J69QSs9FUJXO5huxCtJ5oO3wAWfd8AWh11ua-g/edit?gid=1540894208#gid=1540894208",
          },
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
        date: "10.2-12.2",
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
  {
    year: 2021,
    season: "Outdoor",
    tournaments: [
      {
        name: "BBM (as Trepthrowers)",
        place: "Berlin",
        date: "17.10",
        placements: {
          numberOfTeams: 16,
          finalPlacement: 13,
        },
      },
      {
        name: "TiB tournament (as Trepthrowers)",
        place: "Berlin",
        date: "26.6-27.6",
        placements: {
          numberOfTeams: 16,
          finalPlacement: 16,
        },
      },
    ],
  },
];
