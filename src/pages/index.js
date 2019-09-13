import React from "react"
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import Templates from '../templates/blogPost'
const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'avenir'
        }}>
          {edges.map(edge => {
            const {frontmatter} = edge.node
            return (
              <Link
                style={{marginBottom: '1rem'}}
                key={frontmatter.path}
                to={frontmatter.path}
              >
                {frontmatter.title}
              </Link>
            )
          })}
        </div>
      </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ){
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
