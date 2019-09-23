import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const Icon = styled.i`
  font-size: 1.5em;
  width: 6em;
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
          <i className="github">
            <FaGithub size={48} />
          </i>
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/pokrim"
          target="_blank"
        >
          <i class="linkedin">
            <FaLinkedin size={48} />
          </i>
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/pokrim"
          target="_blank"
        >
          <i class="instagram">
            <FaInstagram size={48} />
          </i>
        </a>
      </Icon>
    </footer>
  )
}

export default Footer
