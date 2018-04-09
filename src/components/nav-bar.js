import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './search-bar'

export default class NavBar extends Component {
  state = {
    city: ''
  }

  handleCity = (e) => {
    const city = e.target.value
    this.setState(() => ({ city }))
  }

  render() {
    const { city } = this.state
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img className="image-logo" src={`/src/images/logo.svg`} /><h1>Weather</h1>
        </Link>
        <SearchBar
          getCity={this.handleCity}
          value={city}
        />
      </div>
    )
  }
}
