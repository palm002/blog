import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline overline #3c9de1 solid;
  }
`

const BlogTitle = styled.h2`
  margin-bottom: 5px;
  font-family: open sans;
  font-weight: bold;
  color: #dbbea1;
`

const BlogDate = styled.h6`
  font-family: open sans;
  color: #dbbea1;
  font-weight: unset;
  font-style: italic;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Mirko Palancaji" />
      <div className="">
        <br />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className="" key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title}</BlogTitle>
              </BlogLink>
              <BlogDate>Published: {node.frontmatter.date}</BlogDate>
              <p style={{ fontFamily: "lato", color: "#f5f5f5" }}>
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
