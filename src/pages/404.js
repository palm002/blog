import React from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WarningColour = styled.div`
  color: #c23b22;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <WarningColour>
      <h1 style={{ fontWeight: "bold", paddingTop: "1rem" }}>OOPS</h1>
      <div className="">
        <FaExclamationTriangle size={68} />
      </div>
      <br />
      <p style={{ fontFamily: "lato", color: "#2b2b2b" }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </WarningColour>
  </Layout>
)

export default NotFoundPage
