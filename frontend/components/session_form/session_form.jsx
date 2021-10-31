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
    this.demoUser = this.demoUser.bind(this)
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

  renderErrors() {
    const { errors } = this.props

    const anyErrorMessages = errors ? (
      <ul>
        { errors.map((error, idx)=> {
          return (
          <li key={`error-${idx}`}>
            { error }
          </li>
          )
      })}
      </ul>
    ) : (
      null
    )
    return anyErrorMessages
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  demoUser() {
    let demo = {
      email: 'demo@gmail.com',
      password: 'password'
    }

    this.props.processForm(demo)
  }

  render () {
    const { email, password } = this.state;
    const { formType, navLink } = this.props;
    // const errorMessages = errors ? (
    //   <ul>
    //     { errors.map(error => <li>{ error }</li>) }
    //   </ul>
    // ) : (
    //   <div></div>
    // )

    // const altLink = formType === 'Login' ? (
    //   <Link to='/signup'>Sign Up</Link>
    // ) : (
    //   <Link to="/login">Login</Link>
    // )

    const demoLogin = (formType === 'Login') ? (
      <p>Just here to look? &nbsp;
          <span onClick={ this.demoUser }>Demo User</span>
      </p>
    ) : (
      null
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>{ formType } to Destiny+</h3>
        <br/>
          <p>Please { formType } or { navLink} </p>
          { this.renderErrors() }
          <br/>
          <label>Email:
            <input
              type="text"
              value={email}
              onChange={this.update('email')}
            />

          <br/>
          </label>
          <label>Password:
            <input
              type="password"
              value={password}
              onChange={this.update('password')}
            />
          </label>
          {/* { errorMessages }
          { altLink } */}
          <br/>
          <button>{ formType }</button>
        </form>
        { demoLogin }
      </div>
    )
  }
}

// TODO: maybe make the Demo User a button