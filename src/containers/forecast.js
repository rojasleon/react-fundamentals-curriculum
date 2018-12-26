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
    loading: true,
    status: null
  }

  async componentDidMount() {
    const { location: { search } } = this.props
    const city = queryString.parse(search).city
    this.makeRequest(city)
  }

  makeRequest = (city) => {
    if(!city) return;
    this.setState({loading: true}, async () => {
      const { data, status } = await getForecast(city);
      if (status === 404) this.setState({
        status: 404,
        loading: false
      });
      else {
        this.setState(() => ({ forecast: data, loading: false, city }))
      }
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
        {this.state.loading && <div style={{ fontSize: '37px', textAlign: 'center' }}>Loading...</div>}
        {!this.state.loading && this.state.status !== 404
        ? <div>
            <h2 style={{ textAlign: 'center', fontSize: '40px', color: 'rgb(156,169,191)' }}>{this.state.city.toUpperCase()}</h2>
            <div className="forecast">
              {forecast.list.map((item) => (
                <DayItem onClick={() => this.handleClick(item)} key={item.dt} {...item} {...history} />
              ))}
            </div>
          </div>
        : <div>Not found</div>
        }
      </div>
    )
  }
}
