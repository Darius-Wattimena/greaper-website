import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
