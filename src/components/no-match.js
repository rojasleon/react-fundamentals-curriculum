import React from 'react'

export default function NoMatch({ location: { pathname } }) {
  return (
    <div>
      No match
      <div>{pathname}</div>
    </div>
  )
}