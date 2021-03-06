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
        <header className="nav-bar">
          <NavLink to="/" className='header'>
            Home
          </NavLink>
          <NavLink to="/apartmentIndex" className='header'>See All the Apartments
          </NavLink>
            <ul>
              {logged_in &&
                <a href={sign_out_route} className='header'>Sign Out</a>
              }
              {!logged_in &&
                <a href={sign_in_route} className='header'>Sign In</a>
              }
            </ul>
        </header>
      </>
    )
  }
}
export default Header
