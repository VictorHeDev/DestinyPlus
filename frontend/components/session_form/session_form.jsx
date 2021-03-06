import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props
      .processForm(user)
      .then(() => this.props.history.push('/profiles'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    const { errors } = this.props;

    const anyErrorMessages = errors ? (
      <ul>
        {errors.map((error, idx) => {
          return (
            <li key={`error-${idx}`} className='error-message'>
              {error}
            </li>
          );
        })}
      </ul>
    ) : null;
    return anyErrorMessages;
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  demoUser() {
    let demo = {
      email: 'demo@gmail.com',
      password: 'password',
    };

    this.props
      .processForm(demo)
      .then(() => this.props.history.push('/profiles'));
  }

  render() {
    const { email, password } = this.state;
    const { formType, navLink } = this.props;

    const demoLogin =
      formType === 'Login' ? (
        <p>
          Just here to look? &nbsp;
          <span className='add-underline' onClick={this.demoUser}>
            Demo User
          </span>
        </p>
      ) : null;

    return (
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit}>
          <Link to='/'>
            <img src={window.destinyLogoURL} alt='destiny plus logo' />
          </Link>
          <h3>{formType} with your email</h3>
          <br />
          <div className='flex-column-center'>
            <div className='email-container'>
              <label className='email'>
                <input
                  type='email'
                  value={email}
                  onChange={this.update('email')}
                  placeholder='Email'
                />
              </label>
            </div>

            <div className='password-container'>
              <label className='password'>
                <input
                  type='password'
                  value={password}
                  onChange={this.update('password')}
                  placeholder='Password'
                />
              </label>
            </div>
          </div>
          {this.renderErrors()}

          <button>{formType}</button>
          <div className='signup-or-login'>
            <p>
              Please {formType} or{' '}
              <span className='add-underline'>{navLink}</span>{' '}
            </p>
          </div>
          {demoLogin}
        </form>
      </div>
    );
  }
}

// TODO: maybe make the Demo User a button
