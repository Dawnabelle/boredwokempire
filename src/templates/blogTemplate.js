import React from "react"
import { graphql, Link } from "gatsby"

export default function Template(props) {
  const { pageContext = {} } = props;
  const { date = "2020", html = "<p>There was an error</p>", pathSlug, title } = pageContext;
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  // const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
