const { apiEndpoint } = require('./prismic-configuration');
var repo = /([^\/]+)\.prismic\.io/.exec(apiEndpoint);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  
  siteMetadata: {
    title: `Jamjar`,
    description: `The flexible pension app for flexible workers`,
    author: `Sam O'Neill`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,    
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1],
        path: '/preview',
        previews: true,
        accessToken: `${process.env.API_KEY}`,
        omitPrismicScript: false,
        pages: [
        {
          type: 'Page',
          path: '/:uid',
          component: require.resolve('./src/templates/page.js')
        },
        {
          type: 'Index',
          path: '/',
          component: require.resolve('./src/pages/index.js')
        }],        
        sharpKeys: [
          /image|photo|picture/, // (default)
        ]
      }
    },    
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
            },
          },          
          'gatsby-remark-a11y-emoji',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content/`,        
      },
    },    
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jamjar-starter-default`,
        short_name: `jamjar`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
