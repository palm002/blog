import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 5px;
  font-family: open sans;
  font-weight: 300;
`

const BlogDate = styled.h6`
  font-family: open sans;
  color: red;
  font-weight: unset;
  font-style: italic;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className="" key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title}</BlogTitle>
              </BlogLink>
              <BlogDate>Published: {node.frontmatter.date}</BlogDate>
              <p style={{ fontFamily: "lato" }}>{node.excerpt}</p>
              <br />
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
