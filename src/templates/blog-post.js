import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledText = styled.p`
  font-family: lato;
  font-weight: 300;
  font-size: medium;
`

const Button = styled.button`
  background: #ff1744;
  border-radius: 3px;
  color: white;
  padding: 0.5em 1em;
  font-family: open sans;
  font-weight: bold;
  float: right;
  margin-bottom: 5px;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="">
        <div className="">
          <h2 style={{display: 'inline'}}>
            {post.frontmatter.title}
          </h2>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </div>
        <div className="">
          
        </div>
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
