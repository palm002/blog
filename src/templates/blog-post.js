import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledText = styled.p`
  font-family: lato;
  font-weight: 300;
  font-size: medium;
  color: #f5f5f5;
`

// background: #2196f3;
const Button = styled.button`
  background: #dbbea1;
  color: white;
  border-radius: 3px;
  margin-bottom: 5px;
  font-family: open sans;
  font-weight: bold;
  float: right;

`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="">
        <div style={{ padding: `0.5rem 0.5rem` }}>
          <h2 style={{ display: "inline", color: "#dbbea1" }}>{post.frontmatter.title}</h2>
          <Link to="/">
            <Button className="btn">Back</Button>
          </Link>
        </div>
        <div className=""></div>
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
