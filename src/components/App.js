import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Error404 from '../pages/Error404'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/badges">
            <Badges />
          </Route>
          <Route exact path="/badges/new">
            <BadgeNew />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
