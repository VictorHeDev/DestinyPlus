import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLinks from './navbar_links'


export default class NavBar extends React.Component {

  render () {
    const { currentUser, logout } = this.props
    const account = currentUser ? (
      <div className="account">
        <h1 className="greeting">Greetings { currentUser.email }</h1>
        <button className="logout" onClick={() => logout()}>Log Out</button>
      </div>
    ) : (
      <div className="account">
        <Link className="signup" to="/signup">Sign Up</Link>
        <Link className="login" to="/login">Login</Link>
      </div>
    )

    return (
        <nav className="nav-bar">
          <div className="main-nav">
            <img className="navLogo" src={ window.destinyLogoURL } />
            <NavBarLinks />
          </div>

          { account }
        </nav>


    )
  }
}
