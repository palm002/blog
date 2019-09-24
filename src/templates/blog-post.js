import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledText = styled.p`
  font-family: lato;
  font-weight: 300;
  font-size: large;
  color: #2b2b2b;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2 style={{ color: "#2a3439" }}>{post.frontmatter.title}</h2>
      </div>
      <StyledText>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledText>
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
