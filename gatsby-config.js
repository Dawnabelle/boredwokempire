module.exports = {
  siteMetadata: {
    title: `Bored Wok Empire`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Thoughts from tweets`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
