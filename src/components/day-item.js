import React from 'react'
import { getDate } from '../utils/helpers'

export default function DayItem(props) {
  const currenDate = getDate(props.dt)
  const icon = props.weather[0].icon
  return (
    <div className="day-item">
      <div>
        {currenDate}
        <img src={'/src/images/weather-icons/' + icon + '.svg'} />
      </div>
    </div>
  )
}