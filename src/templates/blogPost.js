import React from 'react';
import { graphql } from 'gatsby';

const Template = ({data}) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <div className="post-content"
        dangerouslySetInnerHTML={{__html: html}}
      />
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