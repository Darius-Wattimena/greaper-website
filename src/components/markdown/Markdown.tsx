import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.scss'

interface MarkdownProps {
  markdownFile: string
}

export default function Markdown({ markdownFile }: MarkdownProps) {
  const [source, setSource] = useState('')

  fetch(markdownFile)
    .then(response => response.text())
    .then(text => {
      setSource(text)
    })

  return <ReactMarkdown className="page__markdown">{source}</ReactMarkdown>
}
