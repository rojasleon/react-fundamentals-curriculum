import React, { Component } from 'react'

import ForecastDetail from '../components/forecast-detail'

import { getData } from '../utils/api'
import queryString from 'query-string'

export default class Forecast extends Component {
  state = {
    forecast: [],
    loading: true
  }

  async componentDidMount() {
    const { location: { search } } = this.props
    const country = queryString.parse(search).city
    const forecast = await getData(country);
    this.setState(() => ({ forecast, loading: false }))
  }
  render() {
    console.log(this.state.forecast.city)
    return (
      <div>
        {this.state.loading === true
          ? <div>Loading...</div>
          : <div>FORECAST</div>
        }
      </div>
    )
  }
}
