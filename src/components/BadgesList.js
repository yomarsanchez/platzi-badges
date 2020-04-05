import React, { Component } from 'react'

import twitter from '../images/twitter.svg'

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <div className="Badges__list-card">
                <div className="row no-gutters align-items-center">
                  <div className="col-2 text-center">
                    <img
                      src={badge.avatarUrl}
                      className="rounded-circle"
                      alt={badge.firstName}
                      width="75"
                    />
                  </div>
                  <div className="col-10">
                    <div className="Badges__list-card__body">
                      <h6 className="font-weight-bold">
                        {badge.firstName} {badge.lastName}
                      </h6>
                      <div className="twitter">
                        <img src={twitter} alt="Twitter" width="15" />
                        <small className="font-weight-normal">
                          &nbsp;<b>@</b>
                          {badge.twitter}
                        </small>
                      </div>
                      <small>{badge.jobTitle}</small>
                      <p className="card-text text-right">
                        <small className="text-muted">3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList
