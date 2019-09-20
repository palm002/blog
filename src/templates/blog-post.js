import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledText = styled.p`
  font-family: lato;
  font-weight: 300;
  font-size: medium;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container">
        <h2>{post.frontmatter.title}</h2>
        <StyledText>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledText>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
