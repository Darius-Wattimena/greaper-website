import React from 'react'
import { Tool } from '../../Types'
import { useNavigate } from 'react-router-dom'

interface SelectedToolSelectorProps {
  selectedTool: string
  setSelectedTool: React.Dispatch<React.SetStateAction<Tool>>
}

const buttons = [
  { label: 'Slider Velocity', tool: 'slider-velocity' },
  { label: 'Snapping', tool: 'snapping' },
  { label: 'Trigger Distance', tool: 'trigger-distance' },
  { label: 'Dash Distance', tool: 'dash-distance' }
]

export default function SelectedToolSelector({
  selectedTool,
  setSelectedTool
}: SelectedToolSelectorProps) {
  let navigate = useNavigate()

  return (
    <>
      {buttons.map((button, index) => {
        const { label, tool } = button
        const isActive = tool === selectedTool
        let nextButton = buttons[index + 1]
        let previousButton = buttons[index - 1]

        const isNextActive = nextButton ? nextButton.tool === selectedTool : false
        const isPreviousActive = previousButton ? previousButton.tool === selectedTool : false

        let className = "col-4 no-spacing tools__tool-selector-option"
        let containerClassName = "tools__tool-selector-button-container"
        if (isActive) {
          className += " active-tool"
          containerClassName += " active-tool-container"
        }

        if (isNextActive) className += " active-tool-before"
        if (isPreviousActive) className += " active-tool-after"

        return (
          <div
            key={`tool-selector-${tool}`}
            className={containerClassName}
          >
            <button
              className={className}
              onClick={() => {
                // @ts-ignore
                setSelectedTool(tool)
                navigate('/tools/' + tool)
              }}
            >
              {label}
            </button>
          </div>
        )
      })}
    </>
  )
}
