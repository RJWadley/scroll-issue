import type { GatsbyConfig } from "gatsby";
const path = require("path");

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.resolve("src"),
      },
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
  ],
};

export default config;
