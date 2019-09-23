import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "../../src/images/logo.png"

const renderIcon = () => {
  return (
    <Link to="/">
      <img className="logo" src={icon} alt="logo" />
    </Link>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1d1e18`,
    }}
  >
    <h1
      style={{
        margin: `0 4rem`,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `overline underline`,
        }}
      >
        {siteTitle}
        {/* {renderIcon()} */}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
