import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../src/images/logo.png"

const renderIcon = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="logo" />
    </Link>
  )
}

// style={{
//   margin: `0 4rem`,
//   padding: `1.45rem 1.0875rem`,
//   textAlign: `center`,
// }}
const Header = () => (
  <header
    style={{
      background: `#1f262a`,
    }}
  >
    <h1 className="nav-header">{renderIcon()}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
