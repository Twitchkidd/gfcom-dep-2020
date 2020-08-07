module.exports = {
  siteMetadata: {
    title: `Gareth Field ... Dot Com!`,
    author: {
      name: `Gareth Field`,
      summary: `a trail runner, developer, coffee lover, and dog dad based out of beautiful downtown New London, Connecticut!`,
    },
    description: `A homepage for all things, running-, coding-, coffee-, Dawa- (my dog 😃) and Gareth-related on the Internet!`,
    siteUrl: `https://www.garethfield.com/`,
    socials: {
      twitter: {
        handle: `barefootgareth`,
        name: `Twitter`,
        url: `https://twitter.com/barefootgareth`,
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Monokai Dimmed",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-160627547-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gareth Field, Dot Com!`,
        short_name: `GF.Com!`,
        start_url: `/`,
        background_color: `#efefef`,
        theme_color: `#675997`,
        display: `minimal-ui`,
        icon: `content/assets/gareth-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/Typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
