import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import confLogoImage from '../images/platziconf-logo.svg'
import astronautsImage from '../images/astronauts.svg'

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <img
              src={confLogoImage}
              alt="Conf Logo"
              className="img-fluid mt-5 mb-3"
            />
            <h1>PRINT YOUR BADGES</h1>
            <p>The easiest way to manage your conference</p>
            <Link to="/badges" className="btn btn-primary">
              Start now
            </Link>
          </div>
          <div className="Home__col d-none d-md-block col-md-8">
            <img
              src={astronautsImage}
              alt="Astronauts"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
