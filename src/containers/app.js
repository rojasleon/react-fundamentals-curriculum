import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './home'
import NavBar from '../components/nav-bar'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/forecast" />
        </div>
      </Router>
    )
  }
}
