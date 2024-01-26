import { defaultConfig } from "@portaljs/core";
import userConfig from "@/content/config.mjs";

// TODO types
const siteConfig: any = {
  ...defaultConfig,
  ...userConfig,
  // prevent theme object overrides for
  // values not provided in userConfig
  title: "Jeonbg",
  siteMap: [{ name: "blog", href: "/blog" }],
  theme: {
    ...defaultConfig.theme,
    ...userConfig?.theme,
  },
};

export default siteConfig;
