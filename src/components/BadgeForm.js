import React, { Component } from 'react'

class BadgeForm extends Component {
  // state = {
  //   jobTitle: 'Designer',
  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  handleClick = e => {
    console.log('Button was clicked!')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Form was submitted!')
    console.log(this.props.formValues)
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={this.props.formValues.firstName}
              maxLength="255"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={this.props.formValues.lastName}
              maxLength="255"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.props.formValues.email}
              maxLength="255"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              maxLength="255"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              className="form-control"
              id="twitter"
              name="twitter"
              value={this.props.formValues.twitter}
              maxLength="255"
              onChange={this.props.onChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
