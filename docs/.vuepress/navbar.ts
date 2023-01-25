import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "Reading Notes", 
    icon: "discover", 
    link: "/book_notes/" 
  },
  {
    text: "Tech Notes",
    icon: "note",
    link: "/tech_notes/",
  },
  {
    text: "Life Notes",
    icon: "emmet",
    link: "/life_notes/",
  },
  {
    text: "Annual Plan",
    icon: "creative",
    prefix: "/annual_plan/",
    children: [
      {
        text: "2022",
        icon: "creative",
        prefix: "2022/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "2021",
        icon: "config",
        prefix: "2021/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  }
]);
