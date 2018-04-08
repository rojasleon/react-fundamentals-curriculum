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

    let newCountry = nextProps.location.search
    newCountry = queryString.parse(newCountry).city
    return {
      country: newCountry
    }
    console.log(country)
  }
  render() {
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
