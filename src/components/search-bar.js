import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = ({ getCity, value }) => {
  return (
    <div>
      <input
        type="text"
        onChange={getCity}
        value={value}
      />
      <Link to={`/forecast?city=${value}`}>Go!</Link>
    </div>
  )
}

export default SearchBar