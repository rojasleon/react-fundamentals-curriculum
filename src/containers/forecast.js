import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DayItem from '../components/day-item'


import { getForecast } from '../utils/api'
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
      const forecast = await getForecast(city);
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
    const { forecast } = this.state
    console.log(forecast)
    return (
      <div>
        {this.state.loading === true
          ? <div>Loading...</div>
          : <div>
              <h2>{this.state.city}</h2>
              <div>
                {forecast.list.map((item) => (
                  <DayItem key={item.dt} {...item} />
                ))}
              </div>
            </div>
        }
      </div>
    )
  }
}
