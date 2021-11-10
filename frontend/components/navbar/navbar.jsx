import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLinks from './navbar_links'
import AccountContainer from './account_container'

export default class NavBar extends React.Component {

  render () {
    return (
      <nav className="nav-bar">
        <div className="main-nav">
          <Link to="/browse">
            <img
              // onClick={ () => this.handleLogoClick }
              className="navLogo"
              src={ window.destinyLogoURL }
            />
          </Link>
          <NavBarLinks />
        </div>
        <AccountContainer currentUser={ this.props.currentUser }/>
      </nav>
    )
  }
}
