import React from 'react'
import Markdown from '../../components/markdown/Markdown'
import { NavLink } from 'react-router-dom'

interface GuidesProps {
  markdown: string
  guideName?: string | undefined
}

export default function Guides({ markdown, guideName }: GuidesProps) {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Guides</h1>
      <div className="page__breadcrumb">
        {guideName ? (
          <>
            <NavLink to="/guides" className="page__breadcrumb-item">
              Guides
            </NavLink>
            <a className="page__breadcrumb-item">{guideName}</a>
          </>
        ) : (
          <a className="page__breadcrumb-item">Guides</a>
        )}
      </div>
      <div className="page__wrapper">
        <div className="page__container">
          <Markdown markdownFile={markdown} />
        </div>
      </div>
    </div>
  )
}
