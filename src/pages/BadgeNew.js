import React, { Component } from 'react'

import './styles/BadgeNew.css'
import confLogo from '../images/platziconf-logo.svg'
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
      <React.Fragment>
        <div className="BadgeNew__hero">
          <div className="BadgeNew__container">
            <img className="BadgeNew_conf-logo" src={confLogo} alt="Logo" />
          </div>
        </div>

        <div className="container mb-3">
          <div className="row">
            <div className="col-md-6 col-12 pt-2">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={
                  this.state.form.jobTitle.length
                    ? this.state.form.jobTitle
                    : 'Job_Title'
                }
                twitter={
                  this.state.form.twitter.length
                    ? this.state.form.twitter
                    : 'Twitter'
                }
                avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              />
            </div>
            <div className="col-md-6 col-12 pt-2">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew
