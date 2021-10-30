import React from 'react'

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = { ...this.state }
    this.props.processForm(user)
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value })
    }
  }

  render () {
    const { email, password } = this.state;
    const { formType, errors } = this.props;

    return (
      <div>
        <h1>{  }</h1>
        <form>
          <label>Email:
            <input
              type="text"
              value={email}
              onChange={this.update('email')}
            />
          </label>
          <label>Password:
            <input
              type="password"
              value={password}
              onChange={this.update('password')}
            />
          </label>

        </form>

      </div>
    )
  }
}