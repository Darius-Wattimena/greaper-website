import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Guides() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Guides</h1>
      <div className="page__breadcrumb">
        <a className="page__breadcrumb-item">Guides</a>
      </div>
      <div className="page__wrapper">
        <div className="page__container">
          <div>
            <h2>Available Guides:</h2>
            <ul>
              <li>
                <NavLink to="/guides/rhythm">Rhythm</NavLink>
              </li>
              <li>
                <NavLink to="/guides/flow">Flow</NavLink>
              </li>
              <li>
                <NavLink to="/guides/patterns">Patterns</NavLink>
              </li>
              <li>
                <NavLink to="/guides/common-patterning">Common Patterning</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
