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
      background: `#2196f3`,
      marginBottom: `1.45rem`,
    }}
  >
    <h1
      style={{
        margin: `0 4rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {/* {siteTitle} */}
        {renderIcon()}
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
