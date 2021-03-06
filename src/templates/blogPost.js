import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({data, pageContext}) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <div className="post-content"
        dangerouslySetInnerHTML={{__html: html}}
      />

      { next && (
        <Link to={next.frontmatter.path}>Next</Link>
      )}
      { prev && (
        <Link to={prev.frontmatter.path}>Previous</Link>
      )}
    </React.Fragment>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }){
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template;