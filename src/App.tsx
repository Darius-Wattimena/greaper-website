import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import Tools from './pages/tools/Tools'
import Guides from './pages/guides/Guides'
import Rhythm from './pages/guides/rhythm/Rhythm'
import CommonPatterning from './pages/guides/commonPatterning/CommonPatterning'
import Flow from './pages/guides/flow/Flow'
import Patterns from './pages/guides/patterns/Patterns'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guides/rhythm" component={Rhythm} />
        <Route exact path="/guides/patterns" component={Patterns} />
        <Route exact path="/guides/flow" component={Flow} />
        <Route exact path="/guides/common-patterning" component={CommonPatterning} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/tools" component={Tools} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
