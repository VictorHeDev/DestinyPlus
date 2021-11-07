import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default class SelectProfiles extends Component {
  constructor(props) {
    super(props)

    this.handleClickProfile = this.handleClickProfile.bind(this)
  }

  componentDidMount() {
    this.props.requestProfiles()
    // debugger
  }

  handleEditClick(e) {
    e.preventDefault()
    this.props.history.push('/profiles/edit')
  }

  handleClickProfile(e, profileId) {
    e.preventDefault()

    this.props.requestProfile(profileId)
    // this.props.reformatProfiles(this.props.profiles[profileId])
    this.props.history.push('/browse')
  }

  handleNewProfileClick(e) {
    e.preventDefault()
    this.props.history.push('/profiles/new')
  }
  // Profile(props) {
  //   return <li>{ props.value }</li>
  // }


  render() {
    const { profiles } = this.props;
    // debugger

    return (
      <div className="profiles-container">
        <button onClick={ (e) => this.handleEditClick(e) }>Edit</button>
        <button onClick={ (e) => this.handleNewProfileClick(e) }>New Profile</button>
        <img className="profiles-logo" src={ window.destinyLogoURL }/>
        <h3>Who's watching?</h3>

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
    )
  }
}
