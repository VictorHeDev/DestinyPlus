import React, { Component } from 'react';

export default class EditProfileForm extends Component {
    constructor(props) {
    super(props)
    props

    this.state = this.props.profile
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentDidMount() {
    this.props.requestProfile(this.props.match.params.profileId);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit() {
    // console.log(this.state)
    // debugger
    this.props.action(this.state)
    this.props.history.push('/profiles')
  }

  handleDeleteClick() {
    // console.log("click handled hello")
    // debugger
    this.props.deleteProfile(this.state.id)
    this.props.history.push('/profiles')
  }

  render() {
    const { action, formType, profile } = this.props;

    return (
      <div className="main-profile-form-container">
        <form onSubmit={ this.handleSubmit }>
          <h3>{ formType }</h3>
          <label>Name
            <input
              type="text"
              value={ this.state.name }
              onChange={ this.update('name') }
              // placeholder={ name } use a componentDidMount?
            />
          </label>
          <button>{ formType }</button>
        </form>
        <button onClick={ this.handleDeleteClick }>Delete</button>
      </div>
    );
  }
}