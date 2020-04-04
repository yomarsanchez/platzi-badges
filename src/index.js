import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './components/Badge'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Badge
    firstName="Yomar"
    lastName="Sánchez"
    avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
    jobTitle="Full Stack Developer"
    twitter="yomarsanchez"
  />,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
