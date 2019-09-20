import React from "react"
import { graphql, Link } from "gatsby"

export default function Template(props) {
  const { pageContext = {} } = props;
  const { date = "2020", html = "<p>There was an error</p>", pathSlug, title } = pageContext;

  return (
    <div className="blog-post-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir',
        textAlign: 'center'
      }}>
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
