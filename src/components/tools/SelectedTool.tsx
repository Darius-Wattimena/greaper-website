import HyperTriggerDistanceCalculator from './hyperTriggerDistance/HyperTriggerDistanceCalculator'
import SliderVelocityCalculator from './svFinder/SliderVelocityCalculator'
import SnappingSpecifier from './snappingSpecifier/SnappingSpecifier'
import CustomSnapChecker from './customSnapChecker/CustomSnapChecker'
import React from 'react'
import { Tool } from '../../Types'

interface SelectedToolProps {
  selectedTool: Tool
  ascendance: boolean
  bpm: number
  circleSize: number
  sliderVelocity: number
  sliderVelocityMultiplier: number
}

export default function SelectedTool({
  selectedTool,
  ascendance,
  bpm,
  circleSize,
  sliderVelocity,
  sliderVelocityMultiplier
}: SelectedToolProps) {
  switch (selectedTool) {
    case 'Trigger Distance':
      return (
        <HyperTriggerDistanceCalculator
          bpm={bpm}
          circleSize={circleSize}
          sliderVelocity={sliderVelocity}
          sliderVelocityMultiplier={sliderVelocityMultiplier}
        />
      )
    case 'Slider Velocity':
      return <SliderVelocityCalculator bpm={bpm} ascendance={ascendance} />
    case 'Snapping':
      return <SnappingSpecifier bpm={bpm} />
    default:
      return <CustomSnapChecker bpm={bpm} />
  }
}
