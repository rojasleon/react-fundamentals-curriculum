import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ForecastDetail from '../components/forecast-detail'

import { getData } from '../utils/api'
import queryString from 'query-string'

export default class Forecast extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }
  state = {
    forecast: [],
    city: '',
    loading: true
  }

  async componentDidMount() {
    const { location: { search } } = this.props
    const city = queryString.parse(search).city
    this.makeRequest(city)
  }

  makeRequest = (city) => {
    this.setState({loading: true}, async () => {
      const forecast = await getData(city);
      this.setState(() => ({ forecast, loading: false, city }))
    })
  }

  componentWillReceiveProps(nextProps, prevState) {
    if(nextProps.location !== prevState.city) {
      const { location: { search } } = nextProps
      const city = queryString.parse(search).city
      this.makeRequest(city)
    }
  }

  render() {
    console.log(this.state.forecast)
    return (
      <div>
        {this.state.loading === true
          ? <div>Loading...</div>
          : <div>{this.state.city}</div>
        }
      </div>
    )
  }
}
