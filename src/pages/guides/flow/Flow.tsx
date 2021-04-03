import React from 'react'
import { NavLink } from 'react-router-dom'
import Markdown from '../../../components/markdown/Markdown'
import md from './Flow.md'

export default function Flow() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Guides</h1>
      <div className="page__breadcrumb">
        <NavLink to="/guides" className="page__breadcrumb-item">
          Guides
        </NavLink>
        <a className="page__breadcrumb-item">Flow</a>
      </div>
      <div className="page__wrapper">
        <div className="page__container">
          <Markdown markdownFile={md} />
        </div>
      </div>
    </div>
  )
}
