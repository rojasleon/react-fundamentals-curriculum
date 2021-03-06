import React, { Component } from 'react'
import { getDate } from '../utils/helpers'

export default class Detail extends Component {
  render() {
    const { location: { state } } = this.props
    const city = this.props.match.params.detailId
    const date = getDate(state.dt)
    const icon = state.weather[0].icon
    const weather = state.weather[0].description
    const humidity = state.humidity
    const max = state.temp.max
    const min = state.temp.min
    const IMAGE_URL = 'https://github.com/rojasleon/react-fundamentals-curriculum/blob/master/src/images/weather-icons'
    return (
      <div className="card">
        <img width="40%" src={`${IMAGE_URL}/${icon}.jpg?raw=true`} />
        <h3>{date}</h3>
        <h3>{city.toUpperCase()}</h3>
        <h3>{weather}</h3>
        <h3>Min temp: {min}</h3>
        <h3>Max temp: {max}</h3>
        <h3>Humidity: {humidity}</h3>
      </div>
    );
  }
}
