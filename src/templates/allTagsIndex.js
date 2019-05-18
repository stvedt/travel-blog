import React from "react"
import { Link, graphql } from "gatsby"

const AllTagsTemplate = ({data, pageContext}) => {
  const { tags } = pageContext;
  return (
    <ul>
      {tags.map((tagName, index) => {
        return (
          <li key={index}>
            <Link to={`${tagName}`}>{tagName}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default AllTagsTemplate;