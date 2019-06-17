const config = require('./config')

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        components: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.siteManifest,
    },
  ],
}
