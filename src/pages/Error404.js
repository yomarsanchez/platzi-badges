import React from 'react'

import './styles/Error404.css'
import img404 from '../images/img404.png'

const Error404 = () => {
  return (
    <div className="Error404">
      <div className="Error404__container">
        <figure className="Error404__image">
          <img src={img404} alt="404 Not Found" />
        </figure>
        <div className="text-center">
          <h4>Whoops!</h4>
          <p>Error 404 page not found.</p>
        </div>
      </div>
    </div>
  )
}

export default Error404
