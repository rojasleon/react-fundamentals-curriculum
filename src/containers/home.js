import React, { Component } from 'react'

import SearchBar from '../components/search-bar'

import { getData } from '../utils/api'

export default class Home extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      value
    }))
  }

  render() {
    const { value } = this.state
    return (
      <div>
        Home
        <form onSubmit={this.handleSubmit}>
          <SearchBar />
        </form>
      </div>
    )
  }
}
