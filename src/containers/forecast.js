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
    if(!city) return null
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

  handleClick = (city) => {
    this.props.history.push({
      pathname: `/details/${this.state.city}`,
      state: city
    })
  }

  render() {
    const { forecast } = this.state
    const { history } = this.props
    return (
      <div>
        {this.state.loading === true
          ? <div style={{ fontSize: '37px', textAlign: 'center' }}>Loading...</div>
          : <div>
              <h2 style={{ textAlign: 'center', fontSize: '40px' }}>{this.state.city.toUpperCase()}</h2>
              <div className="forecast">
                {forecast.list.map((item) => (
                  <DayItem onClick={() => this.handleClick(item)} key={item.dt} {...item} {...history} />
                ))}
              </div>
            </div>
        }
      </div>
    )
  }
}
