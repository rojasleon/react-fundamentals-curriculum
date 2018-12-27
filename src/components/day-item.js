import React from 'react'
import { Link } from 'react-router-dom'
import { getDate } from '../utils/helpers'

export default function DayItem(props) {
  const currenDate = getDate(props.dt)
  const icon = props.weather[0].icon;
  return (
    <div onClick={props.onClick} className="forecast-items">
      <img style={{ width: '40%' }} src={`../images/weather-icons/${icon}.svg`} />
      <h2>{currenDate}</h2>
    </div>
  )
}