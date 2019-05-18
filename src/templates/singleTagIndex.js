import React from "react"
import { Link, graphql } from "gatsby"

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext;
  return (
    <React.Fragment>
      <div>
        Posts about {`${tagName}`}
      </div>
      <div>
        <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </li>
          )
        })}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default SingleTagTemplate;