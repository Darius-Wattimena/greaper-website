import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../greaper.png'
import './Nav.scss'

export default function Nav() {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <img src={logo} alt="Greaper" className="brand" />
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <ul className="nav__wrapper">
              <li className="nav__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/guides">Guides</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/tools">Tools</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-header__end">
          <ul className="nav__wrapper">
            <li className="nav__item">
              <a href="https://bnplanner.greaper.net">BN Planner</a>
            </li>
            <li className="nav__item">
              <a href="https://osu.ppy.sh/wiki/en/Ranking_Criteria/osu!catch">osu!catch RC</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
