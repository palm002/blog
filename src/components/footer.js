import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const Icon = styled.i`
  cursor: pointer;
  position: relative;
`

const StyledFooter = styled.footer`
  background: #1f262a;
  color: whitesmoke;
  font-weight: bold;
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
            <FaGithub size={36} color={"white"} />
          </i>
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/pokrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="linkedin">
            <FaLinkedin size={36} color={"0077B5"} />
          </i>
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/pokrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="instagram">
            <FaInstagram size={36} color={"C13584"} />
          </i>
        </a>
      </Icon>
    </StyledFooter>
  )
}

export default Footer
