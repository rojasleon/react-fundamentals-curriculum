import React, { Component } from 'react'
import { getDate } from '../utils/helpers'
import image from '../images/weather-icons/01d.svg'

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
    console.log(state)
    return (
      <div>
        <img width="10%" src={image} />
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
