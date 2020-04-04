import React from 'react'

import './styles/BadgeNew.css'
import heroLogo from '../images/platziconf-logo.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={heroLogo} alt="Hero Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Yomar"
                lastName="Sánchez Alania"
                avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                jobTitle="Full Stack Developer"
                twitter="yomarsanchez"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
