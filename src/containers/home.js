import React, { Component } from 'react'

import SearchBar from '../components/search-bar'

import { getData } from '../utils/api'

export default class Home extends Component {
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
      <div>
        Home
        <form onSubmit={this.handleSubmit}>
          <SearchBar
            getCity={this.handleCity}
            value={city}
          />
        </form>
      </div>
    )
  }
}
