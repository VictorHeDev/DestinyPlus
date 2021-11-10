import React, { Component } from 'react';

export default class EditProfileForm extends Component {
    constructor(props) {
    super(props)

    this.state = this.props.profile
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleProfileClick = this.handleProfileClick.bind(this)
  }

  componentDidMount() {
    this.props.requestProfile(this.props.match.params.profileId);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit() {
    this.props.action(this.state)
    this.props.history.push('/profiles')
  }

  handleDeleteClick() {
    this.props.deleteProfile(this.state.id)
    this.props.history.push('/profiles')
  }

  handleProfileClick(e) {
    e.preventDefault()
    let imageSource = e.currentTarget.src
    return this.setState({ avatar: imageSource })
  }

  render() {
    const { action, formType, profile } = this.props;

    return (
      <div className="main-profile-form-container">
        <h3>{ formType }</h3>

        <div className="sub-profile-form-container">

          <div className="choose-avatar">
            <h3>Choose your Avatar!</h3>
            <div className="avatars-container">
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_1.jpeg?raw=true"
                  alt="penguin-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_2.jpeg?raw=true"
                  alt="mulan-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_3.jpeg?raw=true"
                  alt="mickey-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_4.jpeg?raw=true"
                  alt="elsa-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_5.jpeg?raw=true"
                  alt="stitch-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_6.jpeg?raw=true"
                  alt="kim-possible-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_7.jpg?raw=true"
                  alt="umaru-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_8.jpg?raw=true"
                  alt="nezuko-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_9.jpg?raw=true"
                  alt="chopper-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_10.jpg?raw=true"
                  alt="deku-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_11.jpg?raw=true"
                  alt="jujitsu-kaisen-avatar" />
              </div>
              <div className="avatar-container">
                <img
                  onClick={ (e) => this.handleProfileClick(e) }
                  src="https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_12.jpg?raw=true"
                  alt="faye-valentine-avatar" />
              </div>

            </div>
          </div>

          <div className="profile-form">
            <div className="edit-profile-picture">
              <img src={ this.state.avatar } alt="" />
            </div>
            <div className="profile-form-container">
              <form onSubmit={ this.handleSubmit }>
                <label>
                  <h3>Set Nickname</h3>
                  <input
                    type="text"
                    value={ this.state.name }
                    onChange={ this.update('name') }
                    // placeholder={ name } use a componentDidMount?
                    autoFocus
                  />
                </label>
                <button className="update-profile-btn">{ formType }</button>
              </form>
            </div>
            <button
              onClick={ this.handleDeleteClick }
              className="delete-profile-btn"
            >Delete</button>
          </div>

        </div>
      </div>
    );
  }
}