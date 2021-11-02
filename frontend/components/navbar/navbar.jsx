import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLinks from './navbar_links'


export default class NavBar extends React.Component {

  render () {
    const { currentUser, logout } = this.props
    // debugger
    const greeting = currentUser ? (
      <div>
        <h1 className="greeting">Greetings { currentUser.email }</h1>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    )

    return (
        <nav className="nav-bar">
          <div className="main-nav">
            <img className="navLogo" src={ window.destinyLogoURL } />
            <NavBarLinks />
          </div>

          { greeting }
        </nav>


    )
  }
}
