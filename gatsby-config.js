module.exports = {
  siteMetadata: {
    title: 'Bored Wok Empire',
    description: 'Thoughts that could be tweets',
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
  ]
}
