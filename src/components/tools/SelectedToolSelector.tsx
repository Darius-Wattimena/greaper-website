import React from 'react'
import { Tool } from '../../Types'
import { useNavigate } from "react-router-dom"

interface SelectedToolSelectorProps {
  selectedTool: string
  setSelectedTool: React.Dispatch<React.SetStateAction<Tool>>
}

export default function SelectedToolSelector({
  selectedTool,
  setSelectedTool
}: SelectedToolSelectorProps) {
  let navigate = useNavigate()

  return (
    <>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'slider-velocity' ? 'active-tool' : ''
        }`}
        onClick={() => {
          setSelectedTool('slider-velocity')
          navigate('/tools/slider-velocity')
        }}
      >
        Slider Velocity
      </button>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'snapping' ? 'active-tool' : ''
        }`}
        onClick={() => {
          setSelectedTool('snapping')
          navigate('/tools/snapping')
        }}
      >
        Snapping
      </button>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'trigger-distance' ? 'active-tool' : ''
        }`}
        onClick={() => {
          setSelectedTool('trigger-distance')
          navigate('/tools/trigger-distance')
        }}
      >
        Trigger Distance
      </button>
      <button
        className={`tools__tool-selector-option ${
          selectedTool === 'dash-distance' ? 'active-tool' : ''
        }`}
        onClick={() => {
          setSelectedTool('dash-distance')
          navigate('/tools/dash-distance')
        }}
      >
        Dash Distance
      </button>
    </>
  )
}
