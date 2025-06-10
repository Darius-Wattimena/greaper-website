import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ToolsSideBar from '../../components/tools/ToolsSideBar'
import { isTool, Tool } from '../../Types'
import SelectedToolSelector from '../../components/tools/SelectedToolSelector'
import SelectedTool from '../../components/tools/SelectedTool'
import './Tools.scss'

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState<Tool>('slider-velocity')
  const [bpm, setBpm] = useState<number>(180)
  const [circleSize, setCircleSize] = useState(4.0)
  const [sliderVelocity, setSliderVelocity] = useState(1.0)
  const [sliderVelocityMultiplier, setSliderVelocityMultiplier] = useState(1.0)
  const [ascendance, setAscendance] = useState<boolean>(false)
  const [greaper, setGreaper] = useState<boolean>(false)
  const [customNumerator, setCustomNumerator] = useState(3)
  const [customDenominator, setCustomDenominator] = useState(4)
  const [customWalkSpeedMultiplier, setCustomWalkSpeedMultiplier] = useState(1.5)

  const { tool } = useParams()

  useEffect(() => {
    if (tool) {
      let parsedTool = tool as Tool

      if (isTool(parsedTool)) {
        setSelectedTool(parsedTool)
      }
    }
  }, [tool])

  return (
    <div className="container wrapper page">
      <div className="tools__tool-selector-row">
        <div className="row no-spacing tools__tool-selector">
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
                greaper={greaper}
                setGreaper={setGreaper}
                customNumerator={customNumerator}
                setCustomNumerator={setCustomNumerator}
                customDenominator={customDenominator}
                setCustomDenominator={setCustomDenominator}
                customWalkSpeedMultiplier={customWalkSpeedMultiplier}
                setCustomWalkSpeedMultiplier={setCustomWalkSpeedMultiplier}
              />
            </div>
            <div className="col-9 no-spacing tools_tool-container">
              <div className="tools__tool">
                <SelectedTool
                  selectedTool={selectedTool}
                  ascendance={ascendance}
                  greaper={greaper}
                  bpm={bpm}
                  circleSize={circleSize}
                  sliderVelocity={sliderVelocity}
                  sliderVelocityMultiplier={sliderVelocityMultiplier}
                  customNumerator={customNumerator}
                  customDenominator={customDenominator}
                  customWalkSpeedMultiplier={customWalkSpeedMultiplier}
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
    case 'trigger-distance':
      selectedToolName = 'Hyperdash Trigger Distance Calculator'
      break
    case 'slider-velocity':
      selectedToolName = 'Slider Velocity Calculator'
      break
    case 'snapping':
      selectedToolName = 'Snapping Specifier'
      break
    case 'dash-distance':
      selectedToolName = 'Dash Distance Calculator'
      break
    default:
      selectedToolName = 'Unknown'
      break
  }

  return <div className="col-9 no-margin tools__tool-name">{selectedToolName}</div>
}
