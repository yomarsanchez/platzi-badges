import React, { Component } from 'react'

import './styles/BadgesList.css'
import twitter from '../images/twitter.svg'

class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <div className="row no-gutters">
          <div className="col-2 text-center">
            <img
              src={this.props.badge.avatarUrl}
              className="BadgesListItem__avatar"
              alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
            />
          </div>
          <div className="col-10">
            <div className="BadgesListItem__body">
              <h6 className="font-weight-bold">
                {this.props.badge.firstName} {this.props.badge.lastName}
              </h6>
              <div className="BadgesListItem__body-twitter">
                <img src={twitter} alt="Twitter" width="15" />
                <small className="font-weight-normal">
                  &nbsp;<b>@</b>
                  {this.props.badge.twitter}
                </small>
              </div>
              <small>{this.props.badge.jobTitle}</small>
              <p className="card-text text-right">
                <small className="text-muted">3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class BadgesList extends Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BadgesList
