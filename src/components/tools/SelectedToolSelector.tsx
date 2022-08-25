import React from 'react'
import { Tool } from '../../Types'

interface SelectedToolSelectorProps {
  selectedTool: string
  setSelectedTool: React.Dispatch<React.SetStateAction<Tool>>
}

export default function SelectedToolSelector({
  selectedTool,
  setSelectedTool
}: SelectedToolSelectorProps) {
  return (
    <>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'Slider Velocity' ? 'active-tool' : ''
        }`}
        onClick={() => setSelectedTool('Slider Velocity')}
      >
        Slider Velocity
      </button>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'Snapping' ? 'active-tool' : ''
        }`}
        onClick={() => setSelectedTool('Snapping')}
      >
        Snapping
      </button>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'Trigger Distance' ? 'active-tool' : ''
        }`}
        onClick={() => setSelectedTool('Trigger Distance')}
      >
        Trigger Distance
      </button>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'Dash Distance' ? 'active-tool' : ''
        }`}
        onClick={() => setSelectedTool('Dash Distance')}
      >
        Dash Distance
      </button>
    </>
  )
}
