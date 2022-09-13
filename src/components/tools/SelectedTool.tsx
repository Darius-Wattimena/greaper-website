import HyperTriggerDistanceCalculator from './hyperTriggerDistance/HyperTriggerDistanceCalculator'
import SliderVelocityCalculator from './svFinder/SliderVelocityCalculator'
import SnappingSpecifier from './snappingSpecifier/SnappingSpecifier'
import React from 'react'
import { Tool } from '../../Types'
import DashDistanceCalculator from './dashDistance/DashDistanceCalculator'

interface SelectedToolProps {
  selectedTool: Tool
  ascendance: boolean
  bpm: number
  circleSize: number
  sliderVelocity: number
  sliderVelocityMultiplier: number
  customNumerator: number
  customDenominator: number
}

export default function SelectedTool({
  selectedTool,
  ascendance,
  bpm,
  circleSize,
  sliderVelocity,
  sliderVelocityMultiplier,
  customNumerator,
  customDenominator
}: SelectedToolProps) {
  switch (selectedTool) {
    case 'trigger-distance':
      return (
        <HyperTriggerDistanceCalculator
          bpm={bpm}
          circleSize={circleSize}
          sliderVelocity={sliderVelocity}
          sliderVelocityMultiplier={sliderVelocityMultiplier}
          customNumerator={customNumerator}
          customDenominator={customDenominator}
        />
      )
    case 'slider-velocity':
      return <SliderVelocityCalculator bpm={bpm} ascendance={ascendance} />
    case 'snapping':
      return (
        <SnappingSpecifier
          bpm={bpm}
          customNumerator={customNumerator}
          customDenominator={customDenominator}
        />
      )
    case 'dash-distance':
      return (
        <DashDistanceCalculator
          bpm={bpm}
          circleSize={circleSize}
          sliderVelocity={sliderVelocity}
          sliderVelocityMultiplier={sliderVelocityMultiplier}
          customNumerator={customNumerator}
          customDenominator={customDenominator}
        />
      )
  }
}
