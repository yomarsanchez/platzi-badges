import React, { Component } from 'react'

class BadgeForm extends Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    })
  }

  handleClick = e => {
    console.log('Button was clicked!')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Form was submited!')
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
              maxLength="255"
              onChange={this.handleChange}
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
