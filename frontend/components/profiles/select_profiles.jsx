import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default class SelectProfiles extends Component {
  constructor(props) {
    super(props)
    this.state;

    this.handleClickProfile = this.handleClickProfile.bind(this)
  }

  componentDidMount() {
    this.props.requestProfiles()
  }

  handleClickProfile(e, profileId) {
    e.preventDefault()

    // this.props.requestProfile(profileId)
    this.props.reformatProfiles(this.props.profiles[profileId])
    this.props.history.push('/browse')

  }


  render() {
    const { profiles } = this.props;

    return (
      <div className="profiles-container">
        <button>Edit</button>
        <img className="profiles-logo" src={ window.destinyLogoURL }/>
        <h3>Who's watching?</h3>

        <section className="all-profiles">
          <ul className="profiles-list">

          {
            profiles.map(profile => {
              return (
                <li key={ profile.id }>
                  <div onClick={ (e) => this.handleClickProfile(e, profile.id) }>
                    {/* image */}
                  </div>
                  <span>{ profile.name }</span>
                </li>
              )
            })
          }

          </ul>
        </section>
      </div>
    )
  }
}
