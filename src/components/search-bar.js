import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = ({ getCity, value, id }) => {
  const centered = id === 'home' ? 'centered' : ''
  return (
    <div className={`search-bar ${centered}`}>
      <input
        className="input"
        type="text"
        onChange={getCity}
        value={value}
        placeholder={`Guanajuato, México`}
        style={{ width: id === 'home' ? '100%' : '' }}
      />
      {value
        ? <Link className="button-submit" to={`/forecast?city=${value}`}>Go!</Link>
        : null
      }
    </div>
  )
}

export default SearchBar