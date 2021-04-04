import React from 'react'
import './HyperTriggerDistanceForm.scss'

interface HyperTriggerDistanceFormProps {
  bpm: number
  setBpm: React.Dispatch<React.SetStateAction<number>>
  circleSize: number
  setCircleSize: React.Dispatch<React.SetStateAction<number>>
  sliderVelocity: number
  setSliderVelocity: React.Dispatch<React.SetStateAction<number>>
}

export default function HyperTriggerDistanceForm({
  bpm,
  setBpm,
  circleSize,
  setCircleSize,
  sliderVelocity,
  setSliderVelocity
}: HyperTriggerDistanceFormProps) {
  return (
    <form className="row">
      <div className="col-12 note-col">
        <p className="note">NOTE: decimal numbers work for all fields (e.g. 4,5)</p>
      </div>
      <label htmlFor="bpm" className="col-12">
        BPM
        <input
          id="bpm"
          type="number"
          value={bpm}
          onChange={event => setBpm(Number(event.target.value))}
          min={1}
        />
      </label>
      <label htmlFor="cs" className="col-12">
        Circle Size
        <input
          id="cs"
          type="number"
          value={circleSize}
          onChange={event => setCircleSize(Number(event.target.value))}
          min={0}
          max={10}
        />
      </label>
      <label htmlFor="sv" className="col-12">
        Slider Velocity
        <input
          id="sv"
          type="number"
          value={sliderVelocity}
          onChange={event => setSliderVelocity(Number(event.target.value))}
          min={0.4}
          max={3.6}
        />
      </label>
    </form>
  )
}
