import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "../images/gatsby-icon.png"

const renderIcon = () => {
  return (
    <Link to="/">
      <img src={icon} alt="logo" style={{ width: "5%", marginBottom: 0 }} />
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
    <div
      style={{
        margin: `0 4rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
