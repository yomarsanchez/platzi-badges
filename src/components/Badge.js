import React from 'react'

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    let avatar =
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatar} alt="Avatar" />
          <h1>
            Yomar <br /> Sanchez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Backend Developer</h3>
          <div>@yomarsanchez</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    )
  }
}

export default Badge
