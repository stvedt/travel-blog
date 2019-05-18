import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hello World!</h1>

      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        )
      })}

      <div>
        <Link to="/tags">Browse by Tags</Link>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query HomepageQuery {
  allMarkdownRemark (
    sort: { order: DESC, fields: [frontmatter___date]}
  ){
    edges {
      node {
        frontmatter {
          title
          path
          date
          tags
          excerpt
        }
      }
    }
  }
}
`

export default IndexPage
