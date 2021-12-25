import React from 'react'
import { Outlet, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import Tools from './pages/tools/Tools'
import Guides from './pages/guides/Guides'
import Rhythm from './pages/guides/rhythm/Rhythm'
import CommonPatterning from './pages/guides/commonPatterning/CommonPatterning'
import Flow from './pages/guides/flow/Flow'
import Patterns from './pages/guides/patterns/Patterns'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/guides" element={<Guides />}>
            <Route path="/guides/rhythm" element={<Rhythm />} />
            <Route path="/guides/patterns" element={<Patterns />} />
            <Route path="/guides/flow" element={<Flow />} />
            <Route path="/guides/common-patterning" element={<CommonPatterning />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Navbar() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
