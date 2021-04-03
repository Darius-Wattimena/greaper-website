import React from 'react'
import Markdown from '../../components/markdown/Markdown'
import md from './Home.md'

export default function Home() {
  return (
    <div className="wrapper page__wrapper">
      <div className="page__container">
        <Markdown markdownFile={md} />
      </div>
    </div>
  )
}
