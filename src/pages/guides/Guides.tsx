import React from 'react'
import Markdown from "../../components/markdown/Markdown";
import md from "./Guides.md"

export default function Guides() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Guides</h1>
      <div className="page__breadcrumb">
        <a className="page__breadcrumb-item">Guides</a>
      </div>
      <div className="page__wrapper">
        <div className="page__container">
          <Markdown markdownFile={md} />
        </div>
      </div>
    </div>
  )
}
