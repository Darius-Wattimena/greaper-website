import React from 'react'
import NumberInput from '../form/NumberInput'
import { Tool } from "../../Types";
import SliderVelocityForm from "./svFinder/SliderVelocityForm";
import HyperTriggerDistanceCalculator from "./hyperTriggerDistance/HyperTriggerDistanceCalculator";
import SliderVelocityCalculator from "./svFinder/SliderVelocityCalculator";
import SnappingSpecifier from "./snappingSpecifier/SnappingSpecifier";
import CustomSnapChecker from "./customSnapChecker/CustomSnapChecker";

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
  setAscendance
}: ToolsSideBarProps) {

  let selectedToolSideBar = <div />;
  switch (selectedTool) {
  case 'Slider Velocity':
    selectedToolSideBar = <SliderVelocityForm ascendance={ascendance} setAscendance={setAscendance}/>
    break
  default:
    break
  }

  return (
    <>
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
      {selectedToolSideBar}
    </>
  )
}
