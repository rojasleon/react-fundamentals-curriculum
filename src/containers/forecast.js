import React, { Component } from 'react'

import ForecastDetail from '../components/forecast-detail'

import { getData } from '../utils/api'
import queryString from 'query-string'

export default class Forecast extends Component {
  state = {
    forecast: [],
    country: '',
    loading: true
  }

  async componentDidMount() {
    const { location: { search } } = this.props
    const country = queryString.parse(search).city
    const forecast = await getData(country);
    this.setState(() => ({ forecast, loading: false, country }))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.location !== prevState.country) {
      // country
      const data = nextProps.location.search
      const newCountry = queryString.parse(data).city
      // forecast
      setTimeout(async () => {

        const newForecast = await getData(newCountry)
        return {
          forecast: newForecast
        }
      }, 500)
      return {
        country: newCountry
      }
    }
    return null
  }
  render() {
    console.log(this.state.forecast)
    return (
      <div>
        {this.state.loading === true
          ? <div>Loading...</div>
          : <div>{this.state.country}</div>
        }
      </div>
    )
  }
}
