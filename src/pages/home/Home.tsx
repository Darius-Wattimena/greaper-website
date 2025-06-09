import React from 'react'
import MarkdownFile from '../../components/markdown/MarkdownFile'
import md from './Home.md'

export default function Home() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Home</h1>
      <div className="page__wrapper">
        <div className="page__container">
          <MarkdownFile markdownFile={md} />
        </div>
      </div>
    </div>
  )
}
