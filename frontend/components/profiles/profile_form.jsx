import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.profile
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    const { formType, name } = this.state

    return (
      <div className="main-profile-form-container">
        <form>
          <h3>{ formType }</h3>
          <label>Name
            <input
              type="text"
              value={ name }
              onChange={ this.update('name') }
              // placeholder={ name } use a componentDidMount?
            />
          </label>
          <button>{ formType }</button>
        </form>
        // delete or cancel button
      </div>
    )
  }
}
