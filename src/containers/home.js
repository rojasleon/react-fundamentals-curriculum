import React, { Component } from 'react'

import SearchBar from '../components/search-bar'

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
      <div className="home">
        <h3 className="search">Search a country and city</h3>
        <SearchBar
          id="home"
          getCity={this.handleCity}
          value={city}
        />
      </div>
    )
  }
}
