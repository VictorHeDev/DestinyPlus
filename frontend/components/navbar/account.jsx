import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Account({ currentProfile, logout }) {
  const [show, setShow] = useState(false)

  const handleMouseEnterOnAccountMenu = () => setShow(show => !show)
  const handleMouseLeaveOnAccountMenu = () => setShow(show => !show)

  if (!currentProfile) return null;

  return (
    <div
      onMouseEnter={() => handleMouseEnterOnAccountMenu()}
      onMouseLeave={() => handleMouseLeaveOnAccountMenu()}
      className="account-info"
    >
      <div className="greeting-container">
        <h1 className="greeting">Greetings { currentProfile.name }</h1>
        <img
          src={currentProfile.avatar}
          className="active-profile-avatar"
          alt="current user's avatar"
        />
      </div>
      {
        show ? (
          <ul className="account-menu">
            <li><Link to="/profiles">Select Profile</Link></li>
            <li><a href="https://github.com/VictorHeDev/DestinyPlus">GITHUB</a></li>
            <li><a href="https://www.linkedin.com/in/victor-he/">LINKEDIN</a></li>
            <li><a href="https://angel.co/u/victor-he">ANGELLIST</a></li>
            <li onClick={() => logout()}>LOG OUT</li>
          </ul>
        ) : (
          null
        )
      }
    </div>
  )
}

export default Account