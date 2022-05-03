import type { GatsbyConfig } from "gatsby"
const path = require("path")

const config: GatsbyConfig = {
  // TODO add proper metadata
  siteMetadata: {
    title: `Reform Starter`,
    description: `A starter for Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    image: `./src/images/logo.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Starter`, // TODO add name
        short_name: `Starter`, // TODO add short name
        start_url: `/`,
        background_color: `#ffffff`, // TODO add theme color
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `./src/images/global/icon.png`, //TODO add favicon
      },
    },
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
}

export default config
