import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.profile
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    debugger
    e.preventDefault()
    this.props.action(this.state)
      .then(() => this.props.history.push('/profiles'),
      res => console.log(res))
  }

  handleCancelClick(e) {
    e.preventDefault
    this.props.history.push('/profiles')
  }

  render() {
    const { formType, name } = this.state

    return (
      <div className="main-profile-form-container">
        <div className="sub-profile-form-container">
          <section className="choose-avatar">
            <h3>Choose your Avatar!</h3>
          </section>

          <section className="profile-form">
            <div className="profile-form-container">
              <form onSubmit={ this.handleSubmit }>
                <h3>{ formType }</h3>
                <label>Name
                  <input
                    type="text"
                    value={ name }
                    onChange={ this.update('name') }
                    // placeholder={ name } use a componentDidMount?
                  />
                </label>
                <button>Create Profile</button>
                <button>{ formType }</button>
              </form>

            </div>
            <button onClick={ this.handleCancelClick }>Cancel</button>

          </section>

        </div>
      </div>
    )
  }
}
