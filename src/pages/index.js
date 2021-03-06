import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h2`
  margin-bottom: 5px;
  font-family: open sans;
  font-weight: bold;
  color: #2a3439;
`

const BlogDate = styled.h6`
  font-family: open sans;
  color: #2a3439;
  font-weight: unset;
  font-style: italic;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Mirko Palancaji" />
      <div>
        <br />
        <h4 style={{ fontWeight: `bold` }}>
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title}</BlogTitle>
              </BlogLink>
              <BlogDate>Published: {node.frontmatter.date}</BlogDate>
              <p style={{ fontFamily: "lato", color: "#2b2b2b" }}>
                {node.excerpt}
              </p>
              <hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
