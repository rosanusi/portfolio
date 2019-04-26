module.exports = {
  siteMetadata: {
    title: `Busola Sanusi`,
    description: `User Experience Designer`,
    author: `@busolasanusi`,
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rdwn-icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-pocket`,
      options: {
        consumerKey: "84807-6782aaae4c71830e0e6d7099",
        accessToken: "480fa4f8-440f-bc60-e78f-86695e",
        weeksOfHistory: 12,
        apiMaxRecordsToReturn: 1000,
        getCurrentWeekOnly: `n`,
        stateFilterString: "all",
        tagFilter: false,
        // tagFilterString: "_untagged_",
        favouriteFilter: false,
        // favouriteFilterValue: 0,
        searchFilter: true,
        searchFilterString: "",
        domainFilter: false,
        // domainFilterString: "buzzfeed.com"
      }
    },   
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      }
    }, 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136403700-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

