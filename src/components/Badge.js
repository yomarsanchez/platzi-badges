import React from 'react'

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    let avatar =
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'

    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src={avatar} alt="Avatar" />
          <h1>
            Yomar <br /> Sanchez
          </h1>
        </div>

        <div>
          <p>Backend Engineer</p>
          <p>@yomarsanchez</p>
        </div>

        <div>#platziconf</div>
      </div>
    )
  }
}

export default Badge
