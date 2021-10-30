import React from 'react'
import { Link } from 'react-router-dom'

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
    const errorMessages = errors ? (
      <ul>
        { errors.map(error => <li>{ error }</li>) }
      </ul>
    ) : (
      <div></div>
    )

    const altLink = formType === 'Login' ? (
      <Link to='/signup'>Sign Up</Link>
    ) : (
      <Link to="/login">Login</Link>
    )

    return (
      <div>
        <h1>{  }</h1>
        <form onSubmit={this.handleSubmit}>
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
          { errorMessages }
          { altLink }
          <button>{formType}</button>
        </form>
      </div>
    )
  }
}