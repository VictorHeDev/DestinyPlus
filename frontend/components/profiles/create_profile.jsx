import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.profile;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
      () => this.props.history.push('/profiles'),
      (res) => console.log(res)
    );
  }

  handleCancelClick(e) {
    e.preventDefault;
    this.props.history.push('/profiles');
  }

  handleProfileClick(e) {
    e.preventDefault();
    let imageSource = e.currentTarget.src;
    return this.setState({ avatar: imageSource });
  }

  render() {
    const { formType, name } = this.state;

    return (
      <div className='main-profile-form-container'>
        <h3>Create Your Own Profile</h3>
        <div className='sub-profile-form-container'>
          <section className='choose-avatar'>
            <h3>Choose your Avatar!</h3>
            <div className='avatars-container'>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_1.jpeg?raw=true'
                  alt='penguin-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_2.jpeg?raw=true'
                  alt='mulan-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_3.jpeg?raw=true'
                  alt='mickey-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_4.jpeg?raw=true'
                  alt='elsa-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_5.jpeg?raw=true'
                  alt='stitch-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_6.jpeg?raw=true'
                  alt='kim-possible-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_7.jpg?raw=true'
                  alt='umaru-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_8.jpg?raw=true'
                  alt='nezuko-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_9.jpg?raw=true'
                  alt='chopper-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_10.jpg?raw=true'
                  alt='deku-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_11.jpg?raw=true'
                  alt='jujitsu-kaisen-avatar'
                />
              </div>
              <div className='avatar-container'>
                <img
                  onClick={(e) => this.handleProfileClick(e)}
                  src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_12.jpg?raw=true'
                  alt='faye-valentine-avatar'
                />
              </div>
            </div>
          </section>

          <section className='profile-form'>
            <div className='edit-profile-picture'>
              <img
                src={
                  this.state.avatar
                    ? this.state.avatar
                    : 'https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_1.jpeg?raw=true'
                }
                alt=''
              />
            </div>

            <div className='profile-form-container'>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <h3>Set Nickname</h3>
                  <input
                    type='text'
                    value={name}
                    onChange={this.update('name')}
                    autoFocus
                  />
                </label>
                <button className='update-profile-btn'>Create Profile</button>
              </form>
            </div>
            <button onClick={this.handleCancelClick} className='cancel-btn'>
              Cancel
            </button>
          </section>
        </div>
      </div>
    );
  }
}
