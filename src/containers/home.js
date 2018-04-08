import React, { Component } from 'react'

import { getData } from '../utils/api'

export default class Home extends Component {
  state = {
    value: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const d = await getData(this.state.value)
    console.log("Response " ,d)
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
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
