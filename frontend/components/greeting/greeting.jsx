import React from 'react'
import { Link } from 'react-router-dom'

export default class Greeting extends React.Component {

  render () {
    const { currentUser, logout } = this.props
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
      greeting
    )
  }
}
