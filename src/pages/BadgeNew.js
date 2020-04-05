import React, { Component } from 'react'

import './styles/BadgeNew.css'
import confLogo from '../images/platziconf-logo.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  render() {
    return (
      <div className="BadgeNew">
        <Navbar />

        <div className="BadgeNew__hero">
          <div className="BadgeNew__container">
            <img className="BadgeNew_conf-logo" src={confLogo} alt="Logo" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={
                  this.state.form.jobTitle !== ''
                    ? this.state.form.jobTitle
                    : 'Job Title'
                }
                twitter={
                  this.state.form.twitter !== ''
                    ? this.state.form.twitter
                    : 'twitter'
                }
                avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
