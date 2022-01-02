import React, { useState } from 'react'
import ToolsSideBar from '../../components/tools/ToolsSideBar'
import { Tool } from '../../Types'
import SelectedToolSelector from '../../components/tools/SelectedToolSelector'
import SelectedTool from '../../components/tools/SelectedTool'
import './Tools.scss'

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState<Tool>('Slider Velocity')
  const [bpm, setBpm] = useState<number>(180)
  const [circleSize, setCircleSize] = useState(4.0)
  const [sliderVelocity, setSliderVelocity] = useState(1.0)
  const [sliderVelocityMultiplier, setSliderVelocityMultiplier] = useState(1.0)
  const [ascendance, setAscendance] = useState<boolean>(false)

  return (
    <div className="wrapper page">
      <div className="row tools__tool-selector-row">
        <div className="col-12 no-spacing tools__tool-selector">
          <SelectedToolSelector selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
        </div>
      </div>
      <div className="page__wrapper">
        <div className="page__container tools__container">
          <div className="row tools__tool-header-row">
            <div className="col-3 no-margin tools__side-bar__header">Beatmap Settings</div>
            <SelectedToolName selectedTool={selectedTool} />
          </div>
          <div className="row tools__tool-row">
            <div className="col-3 no-spacing tools__side-bar">
              <ToolsSideBar
                selectedTool={selectedTool}
                bpm={bpm}
                circleSize={circleSize}
                sliderVelocity={sliderVelocity}
                sliderVelocityMultiplier={sliderVelocityMultiplier}
                setBpm={setBpm}
                setCircleSize={setCircleSize}
                setSliderVelocity={setSliderVelocity}
                setSliderVelocityMultiplier={setSliderVelocityMultiplier}
                ascendance={ascendance}
                setAscendance={setAscendance}
              />
            </div>
            <div className="col-9 no-spacing tools_tool-container">
              <div className="tools__tool">
                <SelectedTool
                  selectedTool={selectedTool}
                  ascendance={ascendance}
                  bpm={bpm}
                  circleSize={circleSize}
                  sliderVelocity={sliderVelocity}
                  sliderVelocityMultiplier={sliderVelocityMultiplier}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SelectedToolNameProps {
  selectedTool: Tool
}

function SelectedToolName({ selectedTool }: SelectedToolNameProps) {
  let selectedToolName

  switch (selectedTool) {
    case 'Trigger Distance':
      selectedToolName = 'Hyperdash Trigger Distance Calculator'
      break
    case 'Slider Velocity':
      selectedToolName = 'Ideal Slider Velocity Calculator'
      break
    case 'Snapping':
      selectedToolName = 'Snapping Specifier'
      break
    default:
      selectedToolName = 'Custom Snap Checker'
      break
  }

  return <div className="col-9 no-margin tools__tool-name">{selectedToolName}</div>
}
