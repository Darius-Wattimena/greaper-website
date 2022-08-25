import React, { useEffect } from 'react'
import { Outlet, BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import Tools from './pages/tools/Tools'
import Guides from './pages/guides/Guides'
import { useDarkMode } from 'usehooks-ts'
import github from './github.png'
import md_guides from './markdown/Guides.md'
import md_flow from './markdown/Flow.md'
import md_commonPatterning from './markdown/CommonPatterning.md'
import md_patterns from './markdown/Patterns.md'
import md_rhythm from './markdown/Rhythm.md'
import './App.scss'

function App() {
  const { isDarkMode, toggle } = useDarkMode(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isDarkMode])

  const themeClass = isDarkMode ? 'theme-dark' : 'theme-light'

  return (
    <div className={`theme ${themeClass} website__wrapper`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/guides" element={<Guides markdown={md_guides} />} />
            <Route
              path="/guides/rhythm"
              element={<Guides markdown={md_rhythm} guideName="Rhythm" />}
            />
            <Route
              path="/guides/patterns"
              element={<Guides markdown={md_patterns} guideName="Patterns" />}
            />
            <Route path="/guides/flow" element={<Guides markdown={md_flow} guideName="Flow" />} />
            <Route
              path="/guides/common-patterning"
              element={<Guides markdown={md_commonPatterning} guideName="Common Patterning" />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <div className={'footer'}>
          <div className={'footer__wrapper wrapper'}>
            <div className={'footer__start'}>
              <div className={'footer-nav__wrapper'}>
                <a
                  href="https://github.com/Darius-Wattimena/greaper-website"
                  target="_blank"
                  rel={'noopener noreferrer'}
                  className={'button footer-nav__item'}
                >
                  <img src={github} alt="Source Code" className={'logo'} />
                </a>
              </div>
            </div>
            <div className={'footer__middle'} />
            <div className={'footer__end'}>
              <div className={'footer-nav__wrapper'}>
                <button
                  className="footer-nav__item beatmap-button"
                  onClick={() => {
                    toggle()
                  }}
                >
                  {isDarkMode ? (
                    <div className="button__container">
                      🔅
                      <div className="button__text">Switch to Light mode</div>
                    </div>
                  ) : (
                    <div className="button__container">
                      🌙
                      <div className="button__text">Switch to Dark mode</div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

function Base() {
  return (
    <>
      <Nav />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  )
}

export default App
