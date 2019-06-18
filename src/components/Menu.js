import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/cv">
            CV
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/over">
            Over
          </Link>
        </li>
      </ul>
    </div>
    {/* eslint-disable */}
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
