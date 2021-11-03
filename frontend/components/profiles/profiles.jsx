import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
export default class Profiles extends Component {
  constructor(props) {
    super(props)
    this.state;

  }

  componentDidMount() {
    this.props.requestProfiles()
  }


  render() {
    const { profiles } = this.props;

    return (
      <div className="profiles-container">
        <img className="profiles-logo" src={ window.destinyLogoURL }/>
        <h3>Who's watching?</h3>

        <section className="all-profiles">
          <ul className="profiles-list">

          {
            profiles.map(profile => {
              return (
                <li key={ profile.id }>
                  <div>
                    {/* image */}
                  </div>
                  <span>{ profile.name }</span>
                </li>
              )
            })
          }

          </ul>
        </section>
      </div>
    )
  }
}
