import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Account extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAccountMenu: false
    }
    this.handleMouseEnterOnAccountMenu = this.handleMouseEnterOnAccountMenu.bind(this)
    this.handleMouseLeaveOnAccountMenu = this.handleMouseLeaveOnAccountMenu.bind(this)
  }

  handleMouseEnterOnAccountMenu() {
    this.setState({
      showAccountMenu: true
    })
  }

  handleMouseLeaveOnAccountMenu() {
    this.setState({
      showAccountMenu: false
    })
  }

  render() {
    if (!this.props.currentProfile) return null;
    const { logout, currentProfile } = this.props

    return (
      <div
        onMouseEnter={() => this.handleMouseEnterOnAccountMenu()}
        onMouseLeave={() => this.handleMouseLeaveOnAccountMenu()}
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
          this.state.showAccountMenu ? (
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
}
