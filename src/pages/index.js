import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
            <h2>{frontmatter.title}</h2>
          </div>
        )
      })}

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
