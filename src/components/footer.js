import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const Icon = styled.i`
  cursor: pointer;
  margin: 0.5em 0 0.5em 0;
  position: relative;
`

const StyledFooter = styled.footer`
  background: #dbbea1;
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Mirko P.
      <br />
      <Icon>
        <a
          className="github"
          href="https://www.github.com/palm002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="github">
            <FaGithub size={36} />
          </i>
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/pokrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="linkedin">
            <FaLinkedin size={36} />
          </i>
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/pokrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="instagram">
            <FaInstagram size={36} />
          </i>
        </a>
      </Icon>
    </StyledFooter>
  )
}

export default Footer
