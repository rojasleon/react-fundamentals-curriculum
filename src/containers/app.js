import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './home'
import Forecast from './forecast'
import NoMatch from '../components/no-match'

import NavBar from '../components/nav-bar'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
