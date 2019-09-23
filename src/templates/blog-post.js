import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledText = styled.p`
  font-family: lato;
  font-weight: 300;
  font-size: large;
  color: #f5f5f5;
`

// const Button = styled.button`
//   background: #dbbea1;
//   color: white;
//   border-radius: 3px;
//   margin-bottom: 5px;
//   font-family: open sans;
//   font-weight: bold;
//   float: right;
// `

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2 style={{ color: "#dbbea1" }}>{post.frontmatter.title}</h2>
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
