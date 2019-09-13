const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
    edges {
      node {
        html
        frontmatter {
          path
          title
          date(formatString: "")
        }
      }
    }
  }
}

  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { html, frontmatter } = node;
    const { title, date, path } = frontmatter;

// check your data
    if (title && date && date && html) {
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path,
          html,
          title,
          date,
        },
      })
    } else {
      console.error(`A page render from Gatsby-node.js failed, data missing building page ${title}`, {node});
    }
  })
}
