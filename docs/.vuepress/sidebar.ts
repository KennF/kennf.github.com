import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "note",
      text: "Reading Notes",
      prefix: "book_notes/",
      link: "book_notes/",
      children: "structure",
    },
    {
      icon: "note",
      text: "Tech Notes",
      prefix: "tech_notes/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "Life Notes",
      prefix: "life_notes/",
      link: "life_notes/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "Annual Plan",
      prefix: "annual_plan/",
      link: "annual_plan/",
      children: "structure",
    },
    "slides",
  ],
});
