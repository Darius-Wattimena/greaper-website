import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../greaper.png'
import './Nav.scss'

export default function Nav() {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <nav className="nav">
            <ul className="nav__wrapper">
              <li className="nav__item">
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) => (isActive ? 'navbar__item-active' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  end
                  to="/guides"
                  className={({ isActive }) => (isActive ? 'navbar__item-active' : '')}
                >
                  Guides
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  end
                  to="/tools"
                  className={({ isActive }) => (isActive ? 'navbar__item-active' : '')}
                >
                  Tools
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-header__middle">
          <a href="https://osu.ppy.sh/users/2369776" target="_blank" rel={'noopener noreferrer'}>
            <img src={logo} alt="Greaper" className="brand" />
          </a>
        </div>
        <div className="site-header__end">
          <nav className="nav">
            <ul className="nav__wrapper">
              <li className="nav__item">
                <a href="https://bnplanner.greaper.net">BN Planner</a>
              </li>
              <li className="nav__item">
                <a href="https://osu.ppy.sh/wiki/en/Ranking_Criteria/osu!catch">osu!catch RC</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
