import React from 'react'

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  attendantName = () => {
    if (this.props.firstName !== '' || this.props.lastName !== '') {
      return (
        <h1>
          {this.props.firstName} <br /> {this.props.lastName}
        </h1>
      )
    } else {
      return (
        <h1>
          FIRST_NAME <br /> LAST_NAME
        </h1>
      )
    }
  }

  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          {this.attendantName()}
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#PlatziConf</div>
      </div>
    )
  }
}

export default Badge
