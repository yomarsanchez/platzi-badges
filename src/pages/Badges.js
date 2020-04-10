import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/platziconf-logo.svg'
import BadgesList from '../components/BadgesList'

class Badges extends Component {
  constructor(props) {
    super(props)
    console.log('1. constructor()')
    this.timeoutId = null
    this.state = {
      badges: [],
    }
  }

  componentDidMount() {
    console.log('3. componentDidMount()')

    this.timeoutId = setTimeout(() => {
      this.setState({
        badges: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
          {
            id: '925952de-f43d-49c3-8e04-98f1c6b9e3e6',
            firstName: 'Jasen',
            lastName: 'Kulas',
            email: 'Frieda89@yahoo.com',
            jobTitle: 'Senior Research Consultant',
            twitter: 'JasenKulas35396-9255',
            avatarUrl:
              'https://www.gravatar.com/avatar/0b7dc92c5cbcc2159b5ed9cb5d074867?d=identicon',
          },
          {
            id: '5f9b5d9f-4225-4706-b3b3-330762447071',
            firstName: 'Maynard',
            lastName: 'Rowe',
            email: 'Ressie79@yahoo.com',
            jobTitle: 'Dynamic Creative Engineer',
            twitter: 'MaynardRowe74584',
            avatarUrl:
              'https://www.gravatar.com/avatar/4626f448a94e6d7c81c7bc3f7fc160da?d=identicon',
          },
          {
            id: '92e7da01-75e1-401a-80ab-11e97d14f87a',
            firstName: 'Patricia',
            lastName: 'Koch',
            email: 'Eula98@yahoo.com',
            jobTitle: 'Legacy Paradigm Developer',
            twitter: 'PatriciaKoch50746',
            avatarUrl:
              'https://www.gravatar.com/avatar/d7be7c9206d8bdf7b99a61802ef42bfc?d=identicon',
          },
          {
            id: 'c5f4a4ec-8cc0-4c09-a8f2-a3780d740084',
            firstName: 'Helena',
            lastName: 'Kilback',
            email: 'Eryn2@gmail.com',
            jobTitle: 'Dynamic Directives Orchestrator',
            twitter: 'HelenaKilback49886-1693',
            avatarUrl:
              'https://www.gravatar.com/avatar/b2e9d23a39f852ab3bc67bd9a0176464?d=identicon',
          },
        ],
      })
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()')
    console.log('prev', {
      props: prevProps,
      state: prevState,
    })

    console.log('this', {
      props: this.props,
      state: this.state,
    })
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount()')
    clearTimeout(this.timeoutId)
  }

  render() {
    console.log('2/4. render()')

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.badges} />
        </div>
      </React.Fragment>
    )
  }
}

export default Badges
