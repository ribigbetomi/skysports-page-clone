// import { Link } from "react-router-dom";

export const menuItems = [
  {
    title: "Home",
    // content: (menu) => {
    //   <Link to="/home">{menu.title}</Link>;
    // },
    to: "/",
  },
  {
    title: "Sports",
    submenu: [
      {
        title: "Football",
        to: "/football",
      },
      {
        title: "F1",
        submenu: [
          {
            title: "Frontend",
            to: "/frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                to: "/nodejs",
              },
              {
                title: "PHP",
                to: "/php",
              },
            ],
          },
        ],
      },
      {
        title: "Cricket",
        to: "/cricket",
      },
      {
        title: "Rugby Union",
        to: "/rugby-union",
      },
      {
        title: "Rugby League",
        to: "/rugby-league",
      },
      {
        title: "Golf",
        to: "/golf",
      },
      {
        title: "Boxing",
        to: "/boxing",
      },
      {
        title: "NFL",
        to: "/nfl",
      },
      {
        title: "Tennis",
        to: "/tennis",
      },
      {
        title: "Racing",
        to: "/racing",
      },
      {
        title: "Darts",
        to: "/darts",
      },
      {
        title: "NBA",
        to: "/nba",
      },
      {
        title: "Netball",
        to: "/netball",
      },
      {
        title: "GAA",
        to: "/gaa",
      },
      {
        title: "MMA",
        to: "/mma",
      },
      {
        title: "More Sports",
        to: "/more-sports",
      },
    ],
  },
  {
    title: "Scores",
    to: "/scores",
  },
  {
    title: "Video",
    to: "/video",
  },
  {
    title: "TV",
    to: "/tv",
  },
  {
    title: "Sky Bet",
    to: "/skybet",
  },
  {
    title: "Games",
    to: "/games",
  },
  {
    title: "More",
    submenu: [
      {
        title: "web design",
        to: "/web-design",
      },
      {
        title: "web development",
        submenu: [
          {
            title: "Frontend",
            to: "/frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                to: "/nodejs",
              },
              {
                title: "PHP",
                to: "/php",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        to: "/seo",
      },
    ],
  },
];
