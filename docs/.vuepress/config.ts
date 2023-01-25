import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // 
  lang: "en-US",
  // 网站标题
  title: "Kenneth's Notes",
  // 网站描述
  description: "Make notes to motivate self learning and sharing",

  base: "/",

  theme,

  shouldPrefetch: false,
});
