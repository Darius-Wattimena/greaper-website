import React from 'react'
import NumberInput from '../form/NumberInput'
import { Tool } from '../../Types'
import SliderVelocityForm from './svFinder/SliderVelocityForm'
import SnappingSpecifierForm from './snappingSpecifier/SnappingSpecifierForm'

interface ToolsSideBarProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
  circleSize: number
  setCircleSize: React.Dispatch<React.SetStateAction<number>>
  sliderVelocity: number
  setSliderVelocity: React.Dispatch<React.SetStateAction<number>>
  sliderVelocityMultiplier: number
  setSliderVelocityMultiplier: React.Dispatch<React.SetStateAction<number>>
  selectedTool: Tool
  ascendance: boolean
  setAscendance: React.Dispatch<React.SetStateAction<boolean>>
  customNumerator: number
  setCustomNumerator: React.Dispatch<React.SetStateAction<number>>
  customDenominator: number
  setCustomDenominator: React.Dispatch<React.SetStateAction<number>>
}

export default function ToolsSideBar({
  selectedTool,
  bpm,
  setBpm,
  circleSize,
  setCircleSize,
  sliderVelocity,
  setSliderVelocity,
  sliderVelocityMultiplier,
  setSliderVelocityMultiplier,
  ascendance,
  setAscendance,
  customNumerator,
  setCustomNumerator,
  customDenominator,
  setCustomDenominator
}: ToolsSideBarProps) {
  let selectedToolSideBar = <div />
  switch (selectedTool) {
    case 'Trigger Distance':
    case 'Snapping':
      selectedToolSideBar = (
        <SnappingSpecifierForm
          customNumerator={customNumerator}
          setCustomNumerator={setCustomNumerator}
          customDenominator={customDenominator}
          setCustomDenominator={setCustomDenominator}
        />
      )
      break
    case 'Slider Velocity':
      selectedToolSideBar = (
        <SliderVelocityForm ascendance={ascendance} setAscendance={setAscendance} />
      )
      break
    default:
      break
  }

  return (
    <>
      <div className="beatmap-settings">
        <div className="row">
          <form onSubmit={event => event.preventDefault()}>
            <NumberInput
              id="bpm"
              label="BPM"
              initialValue={bpm.toString()}
              numberSetter={setBpm}
              min={1}
              max={600}
            />
            <NumberInput
              id="cs"
              label="Circle Size (CS)"
              initialValue={circleSize.toString()}
              numberSetter={setCircleSize}
              min={null}
              max={10}
            />
            <NumberInput
              id="sv"
              label="Slider Velocity (SV)"
              initialValue={sliderVelocity.toString()}
              numberSetter={setSliderVelocity}
              min={0.4}
              max={3.6}
            />
            <NumberInput
              id="svm"
              label="Slider Velocity Multiplier (SVM)"
              initialValue={sliderVelocityMultiplier.toString()}
              numberSetter={setSliderVelocityMultiplier}
              min={0.1}
              max={4.0}
            />
          </form>
        </div>
      </div>
      {selectedToolSideBar}
    </>
  )
}
