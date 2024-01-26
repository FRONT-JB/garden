import { defaultConfig } from "@portaljs/core";
import userConfig from "@/content/config.mjs";

// TODO types
const siteConfig: any = {
  ...defaultConfig,
  ...userConfig,
  // prevent theme object overrides for
  // values not provided in userConfig
  title: "Jeonbg",
  navLinks: [
    { name: "blog", href: "/blog" },
    { name: "docs", href: "/docs" },
    { name: "about", href: "/about" },
  ],
  theme: {
    ...defaultConfig.theme,
    ...userConfig?.theme,
  },
};

export default siteConfig;
