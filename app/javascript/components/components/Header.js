import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <header>
          <NavLink to="/">
            Home
          </NavLink>
          <div className="nav-bar">
            <ul>
              <NavLink to="/apartmentIndex" className="nav-link">See All the Apartments</NavLink>
            </ul>
            <ul>
              {logged_in &&
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              }
              {!logged_in &&
                <a href={sign_in_route} className="nav-link">Sign In</a>
              }
            </ul>
          </div>
        </header>
      </>
    )
  }
}
export default Header
