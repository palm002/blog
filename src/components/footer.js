import React from "react"
import styled from "styled-components"

const Icon = styled.i`
  font-size: 1.5rem;
  width: 6rem;
  cursor: pointer;
  padding: 0.5em;
  margin: 0.5em 0 0.5em 0;
  position: relative;
  text-align: center;
`

const Footer = () => {
  return (
    <footer style={{ textAlign: "center" }}>
      © {new Date().getFullYear()}, Mirko P.
      <br />
      <Icon>
        <a
          className="github"
          href="https://www.github.com/palm002"
          target="_blank"
        >
          <i className="github icon large"></i>
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/pokrim"
          target="_blank"
        >
          <i class="linkedin icon large"></i>
        </a>
        <a className="instagram" href="https://www.instagram.com/pokrim" target="_blank">
          <i class="instagram icon large"></i>
        </a>
      </Icon>
    </footer>
  )
}

export default Footer
