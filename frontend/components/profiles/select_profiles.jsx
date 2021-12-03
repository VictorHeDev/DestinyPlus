import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default class SelectProfiles extends Component {
  constructor(props) {
    super(props);

    this.handleClickProfile = this.handleClickProfile.bind(this);
  }

  componentDidMount() {
    this.props.requestProfiles();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) this.props.requestProfiles();
  // }

  handleEditClick(e) {
    e.preventDefault();
    this.props.history.push('/profiles/edit');
  }

  handleClickProfile(e, profileId) {
    e.preventDefault();

    const selectedProfile = this.props.allUserProfiles[profileId];

    this.props.requestProfile(profileId);
    this.props.receiveCurrentProfile(selectedProfile);
    this.props.history.push('/browse');
  }

  handleNewProfileClick(e) {
    e.preventDefault();
    this.props.history.push('/profiles/new');
  }

  render() {
    const { profiles } = this.props;

    return (
      <div className='main-profiles-container'>
        <header>
          <nav>
            <img className='profiles-logo' src={window.destinyLogoURL} />
            <button
              className='edit-profiles-btn'
              onClick={(e) => this.handleEditClick(e)}
            >
              Edit Profiles
            </button>
          </nav>
        </header>

        <div className='profiles-container'>
          <h3>Who's watching?</h3>

          <section className='all-profiles'>
            <ul className='profiles-list'>
              {profiles.map((profile) => {
                return (
                  <li key={profile.id}>
                    <div
                      onClick={(e) => this.handleClickProfile(e, profile.id)}
                    >
                      <img src={profile.avatar} alt='' />
                    </div>
                    <span>{profile.name}</span>
                  </li>
                );
              })}
              <FontAwesomeIcon
                onClick={(e) => this.handleNewProfileClick(e)}
                className='new-profile-icon'
                icon={faPlusCircle}
                size='6x'
              />
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
