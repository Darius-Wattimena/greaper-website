import React, { useState } from 'react'
import Markdown from 'react-markdown'
import './Markdown.scss'

interface MarkdownProps {
  markdownFile: string
}

export default function MarkdownFile({ markdownFile }: MarkdownProps) {
  const [source, setSource] = useState('')

  fetch(markdownFile)
    .then(response => response.text())
    .then(text => {
      setSource(text)
    })

  return (
    <div className="row">
      <div className="col-12">
        <div className="page__markdown">
          <Markdown>{source}</Markdown>
        </div>
      </div>
    </div>
  )
}
