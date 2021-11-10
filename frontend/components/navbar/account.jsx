import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Account extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.currentProfile) return null;

    const { currentUser, logout, currentProfile } = this.props
    const account = currentUser ? (
      <div className="account">
        <button className="logout" onClick={() => logout()}>Log Out</button>

        <h1 className="greeting">Greetings { currentProfile.name }</h1>
        <img
          src={currentProfile.avatar}
          className="active-profile-avatar"
          alt="current user's avatar"
        />
      </div>
    ) : (
      <div className="account">
        <Link className="signup" to="/signup">Sign Up</Link>
        <Link className="login" to="/login">Login</Link>
      </div>
    )

    return (
      <div>
        { account }
      </div>
    )
  }
}
