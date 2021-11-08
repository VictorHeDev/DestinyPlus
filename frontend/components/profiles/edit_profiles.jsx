import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class EditProfiles extends Component {
  constructor(props) {
    super(props)
    this.state;

    this.handleClickDone = this.handleClickDone.bind(this)
  }

  componentDidMount() {
    this.props.requestProfiles()
  }

  handleClickDone(e) {
    e.preventDefault()
    this.props.history.push('/profiles')
  }

  handleClickProfile(e, profileId) {
    e.preventDefault()
    this.props.history.push(`/profiles/${profileId}/edit`)
  }

  render() {
    const { profiles } = this.props;

    return (
      <div className="main-profiles-container">
        <header>
          <nav>
            <img className="profiles-logo" src={ window.destinyLogoURL }/>
            <button onClick={ (e) => this.handleClickDone(e) }>Done</button>
          </nav>
        </header>

        <div className="profiles-container">
          <h3>Manage Profiles</h3>

          <section className="all-profiles">
            <ul className="profiles-list">

            {
              profiles.map(profile => {
                return (
                  <li key={ profile.id }>
                    <div onClick={ (e) => this.handleClickProfile(e, profile.id) }>
                      <img src={ profile.avatar } alt="" />
                    </div>
                    <span>{ profile.name }</span>
                  </li>
                )
              })
            }

            </ul>
          </section>
        </div>

      </div>
    )
  }
}
